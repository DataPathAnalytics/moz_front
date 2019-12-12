import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import { Table } from 'antd'
import { getResults, clearResults } from '../../../redux/action/demos/DemosActions'
import { MED_DATA_NOMENCLATURE_TABLE } from './MedDataPageConstants'

class ResultsPage extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.getResults()
  }

  componentDidUpdate(prevProps){
    if(!_.isEqual(prevProps.uploadedFileData, this.props.uploadedFileData)){
      this.props.getResults()
    }
    // return true
  }

  componentWillUnmount() {
    this.props.clearResults()
  }

  prepareTableData = () => {
    const { getResults } = this.props
    return getResults.map(itemData => (itemData.nomenclature))
  }

  render() {
    const { resultsData } = this.props
    console.log('-=resultsData=-', resultsData)
    return (
      <Table
        bordered
        scroll={{ x: '350%' }}
        pagination={{ position: 'top', pageSize: 8 }}
        columns={MED_DATA_NOMENCLATURE_TABLE}
        dataSource={resultsData}
      />
    )
  }
}

function mapStateToProps({
                           demosStore,
                         }) {
  return {
    resultsData: demosStore.resultsData,
    resultsDataIsFetching: demosStore.resultsDataIsFetching,
    uploadedFileData: demosStore.uploadedFileData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getResults: bindActionCreators(getResults, dispatch),
    clearResults: bindActionCreators(clearResults, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsPage)