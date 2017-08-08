<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
          <el-button
            size="mini"
            type="info"
            style="float:right"
            @click="handleAdd()">增加标签</el-button>
            <br/><br/>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column type="expand">
                  <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="ID">
                        <span>{{ props.row.id }}</span>
                      </el-form-item>
                      <el-form-item label="名称">
                        <span>{{ props.row.name }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="名称"
                  prop="name">
                </el-table-column>
                <el-table-column label="操作" width="200">
                  <template scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
            </el-table>
            <div class="Pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="15"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
            <el-dialog title="修改信息" v-model="editDialogFormVisible">
                <el-form :model="selectTable">
                    <el-form-item label="名称" label-width="100px">
                        <el-input v-model="selectTable.name" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="editDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="update">确 定</el-button>
              </div>
            </el-dialog>
            <el-dialog title="增加标签" v-model="addDialogFormVisible">
                <el-form :model="selectTable">
                    <el-form-item label="名称" label-width="100px">
                        <el-input v-model="selectTable.name" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="addDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
              </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'
    import {getTagList,addTag,updateTag, deleteTag} from '@/api/getData'
    export default {
        data(){
            return {
                baseUrl,
                baseImgPath,
                pageNum: 1,
                pageSize: 15,
                count: 0,
                tableData: [],
                currentPage: 1,
                selectTable: {},
                editDialogFormVisible: false,
                addDialogFormVisible:false,
                address: {},
            }
        },
        created(){
            this.initData();
        },
    	components: {
    		headTop,
    	},
        methods: {
            async initData(){
                this.getList();
            },
            async getList(){
              try{
                const res = await getTagList({pageNumber: this.pageNum, pageSize: this.pageSize});
                this.tableData = [];
                if(res.code == 200){
                  console.log("200");
                  this.count = res.data.totalElements;
                  res.data.content.forEach(item => {
                      const tableData = {};
                      tableData.id = item.id;
                      tableData.name = item.name;
                      this.tableData.push(tableData);
                  })
                }else{
                  console.log("获取失败");
                }
              }catch(err){
                  console.log('获取数据失败', err);
              }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`handleCurrentChange  ${val} `);
                this.currentPage = val;
                this.pageNum = val;
                this.getList()
            },
            handleEdit(index, row) {
                this.selectTable = row;
                this.editDialogFormVisible = true;
            },
            handleAdd(){
              this.selectTable = {};
              this.addDialogFormVisible = true;
            },
            async handleDelete(index, row) {
                try{
                    const res = await deleteTag(row.id);
                    if (res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功'
                        });
                        this.tableData.splice(index, 1);
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                    console.log('删除失败')
                }
            },
            async update(){
                this.editDialogFormVisible = false;
                try{
                    const res = await updateTag(this.selectTable)
                    if (res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '更新成功'
                        });
                        this.getList();
                    }else{
                        this.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                }catch(err){
                    console.log('更新失败', err);
                }
            },
            async add(){
                this.addDialogFormVisible = false;
                try{
                    const res = await addTag(this.selectTable)
                    if (res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '新增成功'
                        });
                        this.getList();
                    }else{
                        this.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                }catch(err){
                    console.log('新增失败', err);
                }
            },
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .table_container{
        padding: 20px;
    }
    .Pagination{
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
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
</style>
