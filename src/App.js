import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout, Empty, ConfigProvider } from 'antd'
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import Demos from './pages/demos/demos'

const { Content } = Layout

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mappingLoaded: false,
    }
  }

  renderEmptyComponent = () => {
    const { translate } = this.props
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={translate('empty_data_name')} />
    )
  }

  renderAuthenticatedPage = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <ConfigProvider renderEmpty={() => this.renderEmptyComponent()}>
          <Content className="App" style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 'calc(85vh)',
          }}>
            <Demos />
          </Content>
        </ConfigProvider>
      </Layout>


    )
  }

  render() {
    return this.renderAuthenticatedPage()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    IntlActions: bindActionCreators(IntlActions, dispatch),
  }
}

export default connect(
  mapDispatchToProps,
)(withTranslate(App))
