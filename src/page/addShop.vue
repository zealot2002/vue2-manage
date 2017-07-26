<template>
    <div>
        <head-top></head-top>
        <el-row style="margin-top: 20px;">
  			<el-col :span="12" :offset="4">
		        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
					<el-form-item label="商铺名称" prop="name">
						<el-input v-model="formData.name"></el-input>
					</el-form-item>

					<el-form-item label="详细地址" prop="address">
						<el-input v-model="formData.address"></el-input>
					</el-form-item>

					<el-form-item label="联系电话" prop="phone">
						<el-input v-model.number="formData.phone" maxLength="11"></el-input>
					</el-form-item>
					<el-form-item label="商铺简介" prop="description">
						<el-input v-model="formData.description"></el-input>
					</el-form-item>
					<el-form-item label="上传店铺头像">
						<el-upload
						  class="avatar-uploader"
						  :show-file-list="false"
						  :on-success="handleShopAvatarScucess"
						  :before-upload="beforeAvatarUpload">
						  <img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
					<el-form-item label="上传营业执照">
						<el-upload
						  class="avatar-uploader"
						  :show-file-list="false"
						  :on-success="handleBusinessAvatarScucess"
						  :before-upload="beforeAvatarUpload">
						  <img v-if="formData.business_license_image" :src="baseImgPath + formData.business_license_image" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
					<el-form-item class="button_submit">
						<el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
					</el-form-item>
				</el-form>
  			</el-col>
  		</el-row>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import {addShop,getUploadToken} from '@/api/getData'
    import {baseUrl, baseImgPath} from '@/config/env'

    export default {
    	data(){
    		return {
          uploadToken : {},
    			formData: {
  					name: '', //店铺名称
  					address: '', //地址
  					latitude: '',
  					longitude: '',
  					description: '', //介绍
  					phone: '',
     	 			image_path: '',
     	 			business_license_image: '',
		        },
		        rules: {
    					name: [
    						{ required: true, message: '请输入店铺名称', trigger: 'blur' },
    					],
    					address: [
    						{ required: true, message: '请输入详细地址', trigger: 'blur' }
    					],
    					phone: [
    						{ required: true, message: '请输入联系电话' },
    					],
	          },
			    baseUrl,
			    baseImgPath,
    		}
    	},
    	components: {
    		headTop,
    	},
      mounted(){
  			this.initData();
  		},
  		computed: {

  		},
      watch: {

  		},
    	methods: {
        async initData(){
          Promise.all([getUploadToken()])
          .then(res => {
            this.uploadToken = res[0].data;
          }).catch(err => {
            console.log(err)
          })
        },
  			handleShopAvatarScucess(res, file) {
  				if (res.status == 1) {
  					this.formData.image_path = res.image_path;
  				}else{
  					this.$message.error('上传图片失败！');
  				}
  			},
  			handleBusinessAvatarScucess(res, file) {
  				if (res.status == 1) {
  					this.formData.business_license_image = res.image_path;
  				}else{
  					this.$message.error('上传图片失败！');
  				}
  			},
  			handleServiceAvatarScucess(res, file) {
          getUpToken();
  				if (res.status == 1) {
  					this.formData.catering_service_license_image = res.image_path;
  				}else{
  					this.$message.error('上传图片失败！');
  				}
  			},
  			beforeAvatarUpload(file) {
  				const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
  				const isLt2M = file.size / 1024 / 1024 < 2;

  				if (!isRightType) {
  					this.$message.error('上传头像图片只能是 JPG 格式!');
  				}
  				if (!isLt2M) {
  					this.$message.error('上传头像图片大小不能超过 2MB!');
  				}
  				return isRightType && isLt2M;
  			},
  			tableRowClassName(row, index) {
		        if (index === 1) {
		        	return 'info-row';
		        } else if (index === 3) {
		        	return 'positive-row';
		        }
		        return '';
		    },
		    handleDelete(index){
		    	this.activities.splice(index, 1)
		    },
		    submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						try{
							let result = await addShop(this.formData);
							if (result.code == 200) {
								this.$message({
					            	type: 'success',
					            	message: '添加成功'
					          	});
		          	this.formData = {
  									name: '', //店铺名称
  									address: '', //地址
  									description: '', //介绍
  									phone: '',
                  }
							}else{
								this.$message({
					            	type: 'error',
					            	message: result.message
					          	});
							}
							console.log(result)
						}catch(err){
							console.log(err)
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请检查输入是否正确',
							offset: 100
						});
						return false;
					}
				});
			},
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.button_submit{
		text-align: center;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 120px;
	    height: 120px;
	    line-height: 120px;
	    text-align: center;
	}
	.avatar {
	    width: 120px;
	    height: 120px;
	    display: block;
	}
	.el-table .info-row {
	    background: #c9e5f5;
	}

	.el-table .positive-row {
	    background: #e2f0e4;
	}
</style>
