import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { Form, Upload, Button, Icon, message } from 'antd'
import { uploadExcelFile } from '../../../redux/action/demos/DemosActions'
import demosStore from '../../../redux/reducer/demos/demos'

class UploadFiles extends Component {
  constructor() {
    super()

    this.state = {
      fileList: [],
      uploading: false,
    }
  }

  state = {
    fileList: [],
    uploading: false,
  }

  handleUpload = () => {
    const { fileList } = this.state
    const formData = new FormData()
    fileList.forEach(file => {
      formData.append('file', file)
    })

    this.setState({
      uploading: true,
    }, () => {
      this.props.uploadExcelFile(formData).then(() => {
        if(!this.props.resultsDataErrorMessage) {
          this.props.goNextTab('2')
        }
        console.log('-=this.props.uploadedFileData=-', this.props.uploadedFileData)
      })
    })

    // You can use any AJAX library you like
    // reqwest({
    //   url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //   method: 'post',
    //   processData: false,
    //   data: formData,
    //   success: () => {
    //     this.setState({
    //       fileList: [],
    //       uploading: false,
    //     })
    //     message.success('upload successfully.')
    //   },
    //   error: () => {
    //     this.setState({
    //       uploading: false,
    //     })
    //     message.error('upload failed.')
    //   },
    // })
  }

  render() {
    const { uploading, fileList } = this.state
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file)
          const newFileList = state.fileList.slice()
          newFileList.splice(index, 1)
          return {
            fileList: newFileList,
          }
        })
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }))
        return false
      },
      fileList,
    }

    return (
      <div>
        {/*<Upload {...props}>*/}
          {/*<Button>*/}
            {/*<Icon type="upload" /> Select File*/}
          {/*</Button>*/}
        {/*</Upload>*/}
        <Upload.Dragger {...props} disabled={!_.isEmpty(this.state.fileList)}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          // loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
    )
  }
}

function mapStateToProps({
                           demosStore,
                         }) {
  return {
    uploadedFileData: demosStore.uploadedFileData,
    uploadedFileDataIsFetching: demosStore.uploadedFileDataIsFetching,
    resultsDataErrorMessage: demosStore.resultsDataErrorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uploadExcelFile: bindActionCreators(uploadExcelFile, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadFiles)
