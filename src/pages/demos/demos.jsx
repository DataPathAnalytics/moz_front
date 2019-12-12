import React, { Component } from 'react'
import _ from 'lodash'
import { Tabs, Row, Col, Spin, Button, message } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadExcelFile, clearDataBase } from '../../redux/action/demos/DemosActions'
import UploadFiles from './components/UploadFiles'
import ResultsPage from './components/ResultsPage'
import MedDataPage from './components/MedDataPage'

class Demos extends Component {
  constructor() {
    super()

    this.state = {
      selectedTabKey: 1,
    }
  }

  callback = (key) => {
    this.setState({
      selectedTabKey: key,
    })
  }

  changeTab = (key) => {
    this.setState({
      selectedTabKey: key,
    })
  }

  handleClearDatabase = () => {
    this.props.clearDataBase().then(() => {
      if (!this.props.clearDataBaseErrorMessage) {
        message.success('База данных очищенна успешно')
      } else {
        message.error('Ощибка при очистке базы данных')
      }
    })
  }

  render() {
    return (
      <div>
        <Tabs onChange={this.callback} type="card" activeKey={this.state.selectedTabKey.toString()}>
          <Tabs.TabPane tab="Income" key="1" disabled={!_.isEmpty(this.props.uploadedFileData)}>
            <Spin spinning={this.props.uploadedFileDataIsFetching}>
              <Row style={{ marginBottom: 15 }}>
                <Col span={12}>
                  <UploadFiles
                    goNextTab={this.changeTab}
                  />
                </Col>
                <Col span={11} offset={1}>
                  <Button type="primary" onClick={this.handleClearDatabase}>Clear Data</Button>
                </Col>
              </Row>

            </Spin>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Uploaded Data" key="2">
            <Row>
              <Col span={24}>
                <MedDataPage />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Result" key="3">
            <Spin spinning={this.props.resultsDataIsFetching}>
              <ResultsPage />
            </Spin>
          </Tabs.TabPane>
        </Tabs>
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
    resultsDataIsFetching: demosStore.resultsDataIsFetching,
    clearDataBaseErrorMessage: demosStore.clearDataBaseErrorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uploadExcelFile: bindActionCreators(uploadExcelFile, dispatch),
    clearDataBase: bindActionCreators(clearDataBase, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Demos)