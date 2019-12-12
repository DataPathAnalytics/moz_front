import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  clearResults,
  getResults,
  saveResult,
  rebuildNomenclatureStore,
} from '../../../redux/action/demos/DemosActions'
import { Table, Radio, Row, Col, Button, message } from 'antd'
import { MED_DATA_NOMENCLATURE_TABLE, MED_DATA_NOMENCLATURE_LITE_TABLE } from './MedDataPageConstants'
import classnames from 'classnames'
import './MedDataPage.css'

class MedDataPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedMedIndex: null,
      selectedMedData: null,
      uploadedData: props.uploadedFileData,
      expandedRows: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props.uploadedFileData, prevProps.uploadedFileData)) {
      this.setState({
        uploadedData: this.props.uploadedFileData,
        expandedRows: [],
      })
    }
  }

  handleRadioChange(e) {
    console.log('we are here')
    const { uploadedData } = this.state
    let medDataPosition = e.target.value.split('_')
    let medData = uploadedData[parseInt(medDataPosition[0], 10)].medData[parseInt(medDataPosition[1], 10)]

    this.setState({
      selectedMedIndex: e.target.value,
      selectedMedData: medData,
    })
  }

  resetSelect = () => {
    this.setState({
      selectedMedIndex: null,
      selectedMedData: null,
    }, () => {
      if (!_.isEmpty(ReactDOM.findDOMNode(this).getElementsByClassName('ant-radio-button-wrapper-checked'))) {
        ReactDOM.findDOMNode(this).getElementsByClassName('ant-radio-button-wrapper-checked')[0].classList.remove('ant-radio-button-wrapper-checked')
      }
      if (!_.isEmpty(ReactDOM.findDOMNode(this).getElementsByClassName('ant-radio-button-checked'))) {
        ReactDOM.findDOMNode(this).getElementsByClassName('ant-radio-button-checked')[0].classList.remove('ant-radio-button-checked')
      }
    })
  }

  handleExpandedRow = (expandedRows) => {
    this.setState({
      expandedRows: expandedRows,
    })
  }

  handleSaveData = (nomenclaturePositionIndex) => {
    const { uploadedData, selectedMedData } = this.state
    let selectedNomenclatureData = uploadedData[nomenclaturePositionIndex].nomenclature
    if (selectedMedData) {
      _.forEach(Object.keys(selectedMedData), (key) => {
        selectedNomenclatureData[key] = this.state.selectedMedData[key]
      })
    }

    this.props.saveResult(selectedNomenclatureData).then(() => {
      if (!this.props.saveResultDataErrorMessage) {
        this.setState({
          selectedMedIndex: null,
          selectedMedData: null,
        }, () => {
          message.success('Изменения сохраненны успешно')
          let copiedNomenclature = _.cloneDeep(uploadedData)
          copiedNomenclature.splice(nomenclaturePositionIndex, 1)
          this.props.rebuildNomenclatureStore(copiedNomenclature)
        })
      } else {
        message.error('Ошибка при сохранении')
      }
    })
  }

  renderDataForChange = (medItem, nomenclaturePositionIndex) => {
    const { uploadedData } = this.state
    const nomenclatureItem = _.cloneDeep(uploadedData[nomenclaturePositionIndex].nomenclature)
    let tableDataSource = []

    _.forEach(Object.keys(medItem), (key) => {
      tableDataSource.push({
        nomenclatureTitle: key,
        nomenclatureValue: nomenclatureItem[key],
      })
    })

    return (
      <div>
        <Row style={{ marginBottom: 5 }}>
          <Col span={24}>
            Данные с файла:
          </Col>
        </Row>
        <Row>
          <Col span={24} className="data-from-file">
            <Table
              showHeader={false}
              pagination={false}
              bordered
              size="small"
              dataSource={tableDataSource}
              columns={MED_DATA_NOMENCLATURE_LITE_TABLE}
            />
          </Col>
        </Row>
      </div>
    )
  }

  renderDataForSave = (medItem, nomenclaturePositionIndex) => {
    const { uploadedData } = this.state
    const nomenclatureItem = _.cloneDeep(uploadedData[nomenclaturePositionIndex].nomenclature)
    let tableDataSource = []

    if (this.state.selectedMedData) {
      _.forEach(Object.keys(this.state.selectedMedData), (key) => {
        tableDataSource.push({
          nomenclatureTitle: key,
          nomenclatureValue: this.state.selectedMedData[key],
        })
      })
    } else {
      _.forEach(Object.keys(medItem), (key) => {
        tableDataSource.push({
          nomenclatureTitle: key,
          nomenclatureValue: nomenclatureItem[key],
        })
      })
    }

    return (
      <div>
        <Row style={{ marginBottom: 5 }}>
          <Col span={24}>
            Данные после сохранения:
          </Col>
        </Row>
        <Row>
          <Col span={24} className="data-for-save">
            <Table
              showHeader={false}
              pagination={false}
              bordered
              size="small"
              dataSource={tableDataSource}
              columns={MED_DATA_NOMENCLATURE_LITE_TABLE}
            />
          </Col>
        </Row>
      </div>
    )
  }

  renderMedDataContent = (medItem, indexForSelect, nomenclaturePositionIndex) => {
    let tableDataSource = []

    const nomenclatureItem = _.cloneDeep(this.state.uploadedData[nomenclaturePositionIndex].nomenclature)
    _.forEach(Object.keys(medItem), (key) => {
      tableDataSource.push({
        nomenclatureTitle: key,
        nomenclatureValue: medItem[key],
        noMatch: !_.isEqual(medItem[key], nomenclatureItem[key]),
      })
    })

    return (
      <Col span={8} style={{ paddingRight: 15, width: '100%', paddingBottom: 10 }}
           className={classnames({ 'selected-variant': indexForSelect === this.state.selectedMedIndex })}>
        <Table
          showHeader={false}
          pagination={false}
          bordered
          size="small"
          dataSource={tableDataSource}
          columns={MED_DATA_NOMENCLATURE_LITE_TABLE}
          rowClassName={(record) => {
            if (record.noMatch) {
              return 'cursor-pointer'
            }
          }}
        />
      </Col>
    )
  }

  sortMedData = (medData, nomenclaturePositionIndex) => {
    const nomenclatureItem = _.cloneDeep(this.state.uploadedData[nomenclaturePositionIndex].nomenclature)
    let tempScore = []
    let sortedData = []

    _.forEach(medData, (tempMedData, index) => {
      let count = 0
      _.forEach(Object.keys(tempMedData), (key) => {
        !_.isEqual(tempMedData[key], nomenclatureItem[key]) && count++
        let existItem = _.findIndex(tempScore, { key: index })
        if (existItem === -1) {
          tempScore.push({
            key: index,
            count: count,
            data: tempMedData,
          })
        } else {
          tempScore[index].count = count
          tempScore[index].data = tempMedData
        }
      })
    })

    let tempTempSore = _.orderBy(tempScore, ['count'], ['desc'])
    _.forEach(tempTempSore, (newData) => {
      sortedData.push(newData.data)
    })

    return sortedData
  }

  renderMedDataSelector = (medData, nomenclaturePositionIndex) => {
    let preparedMedData = this.sortMedData(medData, nomenclaturePositionIndex)
    return (
      <div>
        <Row style={{ marginBottom: 15 }}>
          <Col span={2}>
            {this.renderDataForChange(preparedMedData[0], nomenclaturePositionIndex)}
          </Col>
          <Col span={1}>
            <div>
              <Row>

              </Row>
              <Row>
              <span style={{
                position: 'absolute',
                top: '110px',
                left: '90px',
                height: '100%',
              }}>=></span>
              </Row>
            </div>
          </Col>
          <Col span={2}>
            {this.renderDataForSave(preparedMedData[0], nomenclaturePositionIndex)}
          </Col>
        </Row>

        <Row style={{ marginBottom: 15 }}>
          <Col span={6}>
            <Row>
              <Radio.Group buttonStyle="solid" onChange={(e) => this.handleRadioChange(e)} style={{ width: '100%' }}>
                {_.map(preparedMedData, (medItem, index) => {
                  return (
                    <Col span={8}>
                      <Radio.Button value={`${nomenclaturePositionIndex}_${index}`}
                                    style={{ marginLeft: '40%', marginBottom: 5 }}
                                    defaultChecked={false}>
                        Выбрать
                      </Radio.Button>
                      {this.renderMedDataContent(medItem, `${nomenclaturePositionIndex}_${index}`, nomenclaturePositionIndex)}
                    </Col>
                  )
                })}
              </Radio.Group>
            </Row>
          </Col>
        </Row>
        {/*<Row style={{ marginBottom: 10 }}>*/}
        {/*<Col span={2}>*/}
        {/*<Button onClick={this.resetSelect}>Отменить выбор</Button>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        <Row style={{ marginBottom: 10 }}>
          <Col span={2}>
            <Button type="primary" onClick={() => this.handleSaveData(nomenclaturePositionIndex)}>Проигнорировать и
              сохранить как есть</Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col span={2}>
            <Button type="primary" onClick={() => this.handleSaveData(nomenclaturePositionIndex)}
                    disabled={!this.state.selectedMedData}>Сохранить с выбранной
              заменой</Button>
          </Col>
        </Row>
      </div>
    )
  }

  prepareTableData = () => {
    const { uploadedData } = this.state

    let tableData = []

    _.forEach(uploadedData, (itemData, itemPosition) => {
      tableData.push(_.merge({}, itemData.nomenclature, {
        medDataComponent: this.renderMedDataSelector(itemData.medData, itemPosition),
        customKey: itemPosition,
      }))
    })

    return tableData
  }

  render() {
    return (
      <Table
        bordered
        key="customKey"
        scroll={{ x: '350%' }}
        pagination={{ position: 'top', pageSize: 5 }}
        columns={MED_DATA_NOMENCLATURE_TABLE}
        expandedRowKeys={this.state.expandedRows}
        // onExpand={(expanded, record) => this.handleExpandedRow(expanded, record)}
        onExpandedRowsChange={(expandedRows) => this.handleExpandedRow(expandedRows)}
        expandedRowRender={record => record.medDataComponent}
        dataSource={this.prepareTableData()}
      />
    )
  }
}

function mapStateToProps({
                           demosStore,
                         }) {
  return {
    uploadedFileData: demosStore.uploadedFileData,
    saveResultDataErrorMessage: demosStore.saveResultDataErrorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getResults: bindActionCreators(getResults, dispatch),
    clearResults: bindActionCreators(clearResults, dispatch),
    saveResult: bindActionCreators(saveResult, dispatch),
    rebuildNomenclatureStore: bindActionCreators(rebuildNomenclatureStore, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MedDataPage)