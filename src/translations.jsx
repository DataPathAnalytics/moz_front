module.exports = {
  en: {
    locale: 'en-US',
    messages: {
      login_credential_data_error: 'Incorrect username or password',
      day_off: 'Day off',
      working_day: 'Working day',
      summary_information: 'Summary information',
      questions_group_container_title: 'Questions',

      main_title: 'Auditor tool',
      email: 'Email',
      status: 'Status',
      user_active_status: 'Account activated',
      user_not_active_status: 'Account deactivated',
      user_account_status: 'Account status',
      auditors_list: 'List of Auditors',
      refresh_list_of_auditors: 'Refresh list of auditors',

      email_validate_error: 'Invalid email address entered!',

      menu_templates_title: 'Templates library',
      menu_purchaser_title: 'Purchaser',
      menu_checklists_title: 'Checklists',
      menu_checklists_audit_title: 'Audit Checklists',
      menu_administration_title: 'Administration',
      menu_prioritization_settings_title: 'Risk assessment settings panel',
      menu_prioritization_title: 'Risk assessment',
      menu_prioritization_tenders_title: 'Competitions',
      menu_prioritization_buyers_title: 'Procuring entities',
      menu_administration_users_title: 'Users',
      menu_administration_calendar_title: 'Calendar',
      select_year: 'Select year',

      base_template_name: 'Base template name',
      template_name: 'Template name',

      option_yes: 'Yes',
      option_no: 'No',
      option_applicable: 'Not applicable',
      option_comment: 'Comment',
      option_npa: 'NPA',

      buyer_title: 'Purchaser',
      buyer_card_title: 'Information about the procuring entity',
      buyer_card_identification: 'Identifier',
      buyer_card_name: 'Name',
      date_start: 'Start Date',
      date_end: 'End Date',
      modified_date: 'Date Created / Last Template Revised',

      default_templates_table_header: 'Default checklist templates',
      user_templates_table_header: 'Saved user templates',
      table_field_name: 'Name',
      template_default_checklist_name: 'The name of the control sheet template',
      template_auditor_checklist_name: 'The name of the control sheet',
      create_new_checklist: 'Create your own template',
      start_inspection: 'Start filling',

      add_new_category_title: 'Add question section',
      category_title_name: 'Questions section',
      add_new_category_name: 'Name',
      add_new_question_title: 'Add question to question section',
      add_new_question_button_title: 'Add question',
      add_new_question_name: 'Description',
      add_new_question_number_name: 'Question number',
      add_new_category_number_name: 'Category number',
      add_new_category_number_error_name: 'Section question with this number already exists.',
      add_new_question_number_error_name: 'A question with this number already exists in the selected section.',

      create_new_template: 'Create new template',
      create_new_template_modal: 'Creating new template',
      template_modal_name: 'Template name',
      template_as_default: 'Default',
      template_type: 'Template type',
      default_template_info: 'Default template info:',
      checklist_name: 'Checklist name:',
      checklist_for_table_name: 'НChecklist name',
      required_field: 'Required field',

      template_actions: 'Actions',
      empty_string_name: '',
      buyer: 'Evaluation of the procuring entity',
      tender: 'Evaluation of the tender purchase',
      template_for_user: 'For this user',
      not_empty_field: 'Can\'t be empty',
      change_template_type: 'Change type',
      change_template_name: 'Change name',
      not_empty_field_or_wrong_type: 'Cannot be empty or wrong format',

      cancel_button: 'Cancel',
      save_button: 'Save',
      create_button: 'Create',
      delete_button: 'Delete',
      back_button: 'Back',
      add_button: 'Add',
      start_data: 'Start date',
      end_date: 'End date',
      please_select: 'Please select',
      edit_button_name: 'Edit',
      preview_button_name: 'Preview',
      continue_button_name: 'Continue',
      reset_filters_button_name: 'Reset filters',
      add_question_button_name: 'Add Question',
      add_category_button_name: 'Add Category',
      complete_and_calculate_button_name: 'Complete and calculate',
      save_as_template_button_name: 'Make a template',

      logout_title: 'Logout',
      confirm_delete: 'Delete confirmation',
      confirm_delete_template_message: 'Are you sure you want to delete the template',
      confirm_delete_question_message: 'Are you sure you want to delete the question',
      confirm_delete_category_message: 'Are you sure you want to delete the category',
      confirm_delete_checklist_message: 'Are you sure you want to delete the control sheet',
      confirm_delete_message_prefix: 'Are you sure you want to delete the ',

//prioritization
      tender_procedure_identifier: 'Competition ID',
      tender_procedure_expected_value: 'The planned amount of the competition',
      tender_completed_lot_value: 'Sum of completed lots',
      tender_contract_date: 'Contract date (completion of competition)',
      tender_completed_lots_count: 'The number of completed lots (there is a choice of winner)',
      tender_tenderers_count: 'Number of participants',
      tender_disqualifieds_count: 'Number of disqualifications',
      tender_suppliers_count: 'Number of winners',
      tender_passed_indicators_count: 'Number of indicators worked',
      tender_passed_indicator_name_list: 'Indicators',
      tender_cpv_count: 'Number of items',
      tender_risk_level: 'Competition risk level',
      tender_weighted_rank: 'Prioritization parameter',
      tender_public_date: 'Date of publication',
      tender_procurement_method_details: 'Procurement method',
      tender_table_header: 'List of competitions with procuring entity risks',
      tender_procedure_risk_level: 'Competition risk level',
      tender_identifier_id_name: 'INN',
      buyer_export_table_filename: 'List of procuring entities',
      buyer_identifier: 'INN',
      buyer_legal_name_identifier: 'Name',
      buyer_weight_rank: 'Weight rank',
      buyer_risk_level: 'The risk level of the procuring entity',
      buyer_procedure_number: 'Number of contests',
      buyer_procedures_expected_value: 'Sum of contests',
      buyer_contracts_amount: 'Amount of contracts',
      buyer_passed_indicator_name_list: 'Indicators',
      buyer_passed_indicators_count: 'Number of indicators worked',
      buyer_risked_procedures: 'Number of contests with risks',
      buyer_risked_procedures_with_contract: 'The number of tenders with risks, with the status of "contract signed"',
      buyer_risked_procedures_expected_value: 'Sum of Risk Contests',
      buyer_risked_procedures_expected_value_with_contract: 'The sum of tenders with risks, with the status of "contract signed"',
      buyer_procedures_with_bad_data: 'Number of contests with incorrect data',
      buyer_weighted_rank: 'Prioritization parameter',
      indicator_name: 'No.',
      indicator_description_name: 'Indicator description',
      indicator_value: 'Value',
      indicator_risks: 'Risk',
      indicator_law_violation: 'Violation of the rule of law',
      indicator_risk_level_text: 'Risk level',
      indicator_comment_text: 'Comments',
      triggered_indicators: 'Automatic Competition Risk Indicators',
      start_inspection_from_prioritization_page: 'Start an audit',
      select_template_modal_title_from_prioritization_page: 'Template selection',
      no_found_tender_by_id: 'Information on the entered contest ID is missing',
      empty_table_data_name: 'No data with such parameters',
      empty_data_name: 'No data',


//prioritization buyer columns names for export
      buyer_identifier_name_for_export: 'INN procuring entity',
      buyer_legal_name_identifier_name_for_export: 'Name of company',
      buyer_risk_level_name_for_export: 'Risk level of the procuring entity',
      buyer_procedure_number_name_for_export: 'Number of contests',
      buyer_procedures_expected_value_name_for_export: 'Sum of contests',
      buyer_contracts_amount_name_for_export: 'Amount of contracts',
      buyer_risked_procedures_name_for_export: 'Number of contests with risks',
      buyer_risked_procedures_with_contract_name_for_export: 'The number of contests with risks, with the status of "contract signed"',
      buyer_risked_procedures_expected_value_name_for_export: 'Sum of Risk Contests',
      buyer_risked_procedures_expected_value_with_contract_name_for_export: 'The sum of tenders with risks, with the status of "contract signed"',
      buyer_procedures_with_bad_data_name_for_export: 'Number of contests with incorrect data',
      buyer_weighted_rank_name_for_export: 'Параметр приоритезации',
      buyer_default_column_region_name_name_for_export: 'Region',
      buyer_default_column_completed_lots_count_name_for_export: 'Number of completed lots',
      buyer_default_column_contracts_count_name_for_export: 'Number of contracts',
      buyer_default_column_winner_bids_value_name_for_export: 'Sum of the winning offers',
      buyer_default_column_passed_indicators_count_name_for_export: 'Number of generated unique risk indicators',
      buyer_default_column_passed_indicators_name_for_export: 'Risk indicators triggered',

//prioritization tender filter
      tender_filter_method_name: 'Method',
      tender_filter_indicator_name: 'Indicator',
      tender_filter_start_date_period: 'Period from',
      tender_filter_end_date_period: 'Period to',
      tender_filter_select_organization: 'Select organization',
      tender_filter_OKGZ_section_name: 'OKGZ Section',
      tender_filter_sum_from_to_name: 'Amount from and to',
      tender_filter_sum_from_name: 'Amount from',
      tender_filter_sum_to_name: 'Amount to',
      tender_filter_risk_level_name: 'Risk level',
      tender_filter_concurs_number_name: 'Competition number',
      tender_filter_reset_button_name: 'Reset filters',
      tender_filter_region_name: 'Region',
      indicator_confirmed_by_testing: 'The result of the indicator was confirmed by testing?',
      indicator_component_impacts: 'Component impact',

//prioritization tender columns names for export
      tender_procedure_identifier_name_for_export: 'Procedure ID',
      tender_public_date_name_for_export: 'Date of publication of the competition',
      tender_guarantee_amount_name_for_export: 'Bid Security',
      tender_procurement_method_details_name_for_export: 'Competition Method',
      tender_current_stage_name_for_export: 'Competition stage',
      tender_tenderers_count_name_for_export: 'Number of participants',
      tender_disqualifieds_count_name_for_export: 'Number of disqualifications',
      tender_suppliers_count_name_for_export: 'Number of Winners',
      tender_completed_lots_count_name_for_export: 'Number of completed lots (there is a choice of winner)',
      tender_procedure_expected_value_name_for_export: 'Planned amount of competition',
      tender_procedure_currency_name_for_export: 'Contest Currency',
      tender_identifier_id_name_for_export: 'INN',
      tender_identifier_legal_name_ru_name_for_export: 'Name',
      tender_count_of_lots_name_for_export: 'Number of lots',
      tender_completed_lot_value_name_for_export: 'Sum of completed lots',
      tender_okgz_list_name_for_export: 'OKGZ Sections List',
      tender_okgz_name_for_export: 'OKGZ sections name',
      tender_contract_date_name_for_export: 'Contract date (end of tender)',
      tender_complaints_count_name_for_export: 'Number of complaints',
      tender_passed_indicators_count_name_for_export: 'Number of triggered indicators',
      tender_cpv_count_name_for_export: 'List of triggered indicators',
      tender_procedure_risk_level_name_for_export: 'Risk level',
      tender_weighted_rank_name_for_export: 'Prioritization parameter',

// AUDITOR SETTINGS
      tender_setting_header_name: 'Competition risk assessment options',
      tender_weight_of_total_risk_purchases: 'Change the weight of the parameter "total risk of competition":',
      tender_weight_the_cash_component_purchases: 'Change the weight of the parameter "materiality of the competition":',
      buyer_setting_header_name: 'Parameters of risk assessment and procuring entities',
      buyer_weight_of_weighted_average_risk_procuring: 'Изменить вес параметра "Риск закупающей организации":',
      buyer_weight_of_organizations_total_purchases: 'Change the weight of the parameter "total materiality of tenders of the procuring entity":',
      settings_save_successfully: 'Settings saved successfully',
      settings_save_error: 'Save failed',


// Export button
      export_button_name: 'Export to file',
      export_button_to_pdf_name: 'Export',
      export_button_file_type_name: 'Export type:',
      export_button_selected_columns_name: 'Fields for export:',
      export_button_download_name: 'Download',
      export_button_file_default_name: '',
      export_button_default_filename_name: 'File Name Generated:',
      export_button_custom_filename_name: 'Input file name:',
      export_button_custom_filename_error_message_name: 'Invalid file name. Valid characters are az, az, az, az, 0-9, _, -, space',


      result_evaluation_automatic_scoring_without_critical_information: 'The result of the evaluation of automatic scoring without critical information:',
      final_assessment_representative_SP_KP: 'The final assessment of the representative of the JV KR:',
      checklist_calculate_score_button_name: 'Calculate',
      calculate_no_selected_buyer_message: 'No procuring entity selected',
      calculate_no_selected_tender_message: 'No competition selected',
      not_complete_checklist_indicator_message: 'To complete the checklist you need: Answer all indicators.',
      not_complete_checklist_questions_message: 'To complete the checklist you need: Answer all the questions.',
      checklist_save_as_template_success_message: 'Template saved successfully',
      checklist_save_as_template_error_message: 'Error saving template',
      not_complete_checklist_manual_score_message: 'To complete the checklist you need: Final assessment of the representative of the SP KP.',
      not_complete_checklist_summary_comment_message: 'To complete the checklist, you must: Fill out the general audit summary.',
      not_complete_manual_buyer_score_message: 'To complete the checklist you need to: Fill in the representative’s conclusion.',
      calculate_no_kpi_indicators_answer_message: 'There are no answers to the worked indicators',
      calculate_no_questions_answers_message: 'There are no answers to all questions',
      no_conclusion_of_the_representative_message: 'The conclusion of the representative of the JV KR has not been completed',
      checklist_buyer_or_question_change_message: 'The conditions for calculating the score have been changed. Click "Calculate"',
      checklist_question_selected_as_missing_message: 'For all questions of the checklist, the answer was "Not applicable". Calculation of automatic evaluation of results is not possible. Review the answers, or use another checklist template.',

//Checklist inspection form
      procurement_audit_name: 'Procurement audit:',
      inspection_audit_name: 'Audit name:',
      inspection_period_of_the_audit_name: 'During the period:',
      inspection_checked_organization_name: 'Checked organization:',
      inspection_date_of_completion_name: 'Date of completion:',
      inspection_contract_number_name: 'Contract no:',
      inspection_amount_of_the_deal_name: 'The amount of the deal:',
      inspection_description_of_the_contract_name: 'Description of the contract:',
      inspection_contractor_name: 'Contractor:',
      inspection_auditor_comment_name: 'Summary of issues and issues: A general summary of the review.',
      inspection_published_date_on_portal_name: 'Date of publication of the advertisement on the portal:',
      inspection_date_start_concurs_name: 'Start date of submission of bids:',
      inspection_date_end_concurs_name: 'ОFinal deadline for submission of bids:',
      inspection_amount_of_concurs_name: 'Bid Opening Date:',
      inspection_date_disclosed_concurs_name: 'The size of the guarantee of the competitive bid:',
      inspection_contract_date_of_concurs_name: 'Contract date:',
      checked_organization_name: 'Checked organization:',
      date_name: 'Date:',
      contract_number_name: 'Contract no',
      the_amount_of_the_deal_name: 'The amount of the deal:',
      description_of_the_contract_name: 'Description of the contract:',
      contractor_name: 'Contractor:',
      summary_of_issues_and_issues_name: 'Summary of issues and issues: A general summary of the review.',


      alert_info_title: 'Informational Note',
      alert_warning_title: 'Warning',
      calendar_warning_message: 'Incorrectly marked days in the calendar will lead to errors when calculating some indicators (14, 15, 16 ...)',
      calendar_non_saved_days_warning_message: 'These days are not yet in the database. They will be added after saving.',
      buyer_no_tenders_message: 'This buyer has no any tenders',
      auditor_conclusion_by_result_of_inspection: 'The conclusion of the representative of the SP KP on the results of testing procedures:',

//Checklists filters form
      only_my_checklists_name: 'Only mine',
      checklist_template_type_name: 'Type of checklist template',
      checklist_status_name: 'Status',
      checklist_audit_name: 'Audit name',
      checklist_template_name: 'Template',
      checklist_document_number_name: 'Document number',
      checklist_scores_result_name: 'Score results',
      checklist_date_of_completion_name: 'Date of completion',
      checklist_Initiated_name: 'Initiated',
      checklist_status_complete_name: 'Finished',
      checklist_status_not_complete_name: 'Not finished',
      changes_you_made_may_not_be_saved: 'Changes you made may not be saved.',
    },
  },
  ru: {
    locale: 'ru',
    messages: {
      login_credential_data_error: 'Неверное имя пользователя или пароль',
      day_off: 'Выходной день',
      working_day: 'Рабочий день',
      summary_information: 'Общая информация',
      questions_group_container_title: 'Вопросы',

      main_title: 'Инструмент аудитора',
      email: 'Почтовый адрес',
      status: 'Статус',
      user_active_status: 'Учетная запись активирована',
      user_not_active_status: 'Учетная запись деактивирована',
      user_account_status: 'Статус учетной записи',
      auditors_list: 'Список Аудиторов',
      refresh_list_of_auditors: 'Обновить список аудиторов',

      email_validate_error: 'Введен неверный адрес электронной почты!',

      menu_templates_title: 'Библиотека шаблонов',
      menu_purchaser_title: 'Закупщик',
      menu_checklists_title: 'Контрольные листы',
      menu_checklists_audit_title: 'Контрольные листы аудитов',
      menu_administration_title: 'Администрирование',
      menu_prioritization_settings_title: 'Панель настроек оценки рисков',
      menu_prioritization_title: 'Оценка рисков',
      menu_prioritization_tenders_title: 'Конкурсы',
      menu_prioritization_buyers_title: 'Закупающие организации',
      menu_administration_users_title: 'Пользователи',
      menu_administration_calendar_title: 'Календарь',
      select_year: 'Выбирете год',

      base_template_name: 'Имя главного шаблона',
      template_name: 'Имя шаблона',

      option_yes: 'Да',
      option_no: 'Нет',
      option_applicable: 'Не приминимо',
      option_comment: 'Комментарий',
      option_npa: 'НПА',

      buyer_title: 'Закупщик',
      buyer_card_title: 'Данные закупающей организации',
      buyer_card_identification: 'Идентификатор',
      buyer_card_name: 'Наименование',
      date_start: 'Дата начала',
      date_end: 'Дата окончания',
      modified_date: 'Дата создания / последняя редакция шаблона',

      default_templates_table_header: 'Шаблоны контрольных листов по умолчанию',
      user_templates_table_header: 'Сохраненные шаблоны пользователя',
      table_field_name: 'Имя',
      template_default_checklist_name: 'Название шаблона контрольного листа',
      template_auditor_checklist_name: 'Название контрольного листа',
      create_new_checklist: 'Создать собственный шаблон',
      start_inspection: 'Начать заполнение',

      add_new_category_title: 'Добавить раздел вопросов',
      category_title_name: 'Раздел вопросов',
      add_new_category_name: 'Наименование',
      add_new_question_title: 'Добавить вопрос в раздел вопросов',
      add_new_question_button_title: 'Добавить вопрос',
      add_new_question_name: 'Описание',
      add_new_question_number_name: 'Номер вопроса',
      add_new_category_number_name: 'Номер категории',
      add_new_category_number_error_name: 'Раздел вопрос с таким номером уже существует.',
      add_new_question_number_error_name: 'Вопрос с таким номером уже существует в выбраном разделе.',

      create_new_template: 'Создать новый шаблон',
      create_new_template_modal: 'Создание нового шаблона',
      edit_user_account_modal_title: 'Редактирование данных пользователя',
      template_modal_name: 'Название шаблона',
      template_as_default: 'По умолчанию',
      template_type: 'Тип шаблона',
      default_template_info: 'Информация о шаблоне по умолчанию:',
      checklist_name: 'Название контрольного листа:',
      checklist_for_table_name: 'Название контрольного листа',
      required_field: 'Обязательное поле',

      template_actions: 'Действия',
      empty_string_name: '',
      buyer: 'Оценка закупающей организации',
      tender: 'Оценка тендерной закупки',
      template_for_user: 'Для этого пользователя',
      not_empty_field: 'Не может быть пустым',
      change_template_type: 'Изменить тип',
      change_template_name: 'Изменить имя',
      not_empty_field_or_wrong_type: 'Не может быть пустым или неверный формат',

      cancel_button: 'Отмена',
      save_button: 'Сохранить',
      create_button: 'Создать',
      delete_button: 'Удалить',
      back_button: 'Назад',
      add_button: 'Добавить',
      start_data: 'Дата начала',
      end_date: 'Дата окончания',
      please_select: 'Пожалуйста выберите',
      edit_button_name: 'Редактировать',
      preview_button_name: 'Просмотр',
      continue_button_name: 'Продолжить',
      reset_filters_button_name: 'Сбросить фильтры',
      add_question_button_name: 'Добавить вопрос',
      add_category_button_name: 'Добавить раздел',
      complete_and_calculate_button_name: 'Завершить и рассчитать',
      save_as_template_button_name: 'Сделать шаблоном',

      logout_title: 'Выход',
      confirm_delete: 'Подтверждение удаления',
      confirm_delete_template_message: 'Вы действительно хотите удалить шаблон',
      confirm_delete_question_message: 'Вы действительно хотите удалить вопрос',
      confirm_delete_category_message: 'Вы действительно хотите удалить категорию',
      confirm_delete_checklist_message: 'Вы действительно хотите удалить контрольный лист',
      confirm_delete_message_prefix: 'Вы действительно хотите удалить ',

//prioritization
      tender_procedure_identifier: 'Номер конкурса',
      tender_completed_lot_value: 'Сумма завершенных лотов',
      tender_contract_date: 'Дата договора (завершения конкурса)',
      tender_completed_lots_count: 'Завер шенные лоты',
      tender_procedure_expected_value: 'Сумма конкурса',
      tender_tenderers_count: 'Участ ники',
      tender_disqualifieds_count: 'Дисквали фикации',
      tender_suppliers_count: 'Победи тели',
      tender_passed_indicators_count: 'Количество индикаторов',
      tender_passed_indicator_name_list: 'Индика торы',
      tender_cpv_count: 'Наимено ваний товаров',
      tender_risk_level: 'Уровень риска конкурса',
      tender_weighted_rank: 'Параметр приори тезации',
      tender_public_date: 'Дата публикации',
      tender_procurement_method_details: 'Метод конкурса',
      tender_table_header: 'Перечень конкурсов с рисками закупающей организации',
      tender_procedure_risk_level: 'Уровень риска',
      tender_identifier_id_name: 'ИНН',
      tender_legal_name_identifier: 'Наименование',
      buyer_export_table_filename: 'Перечень закупающих организаций',
      buyer_identifier: 'ИНН',
      buyer_legal_name_identifier: 'Наименование',
      buyer_weight_rank: 'Ранг',
      buyer_risk_level: 'Уровень риска',
      buyer_procedure_number: 'Количество конкурсов',
      buyer_procedures_expected_value: 'Сумма конкурсов',
      buyer_contracts_amount: 'Сумма контрактов',
      buyer_passed_indicator_name_list: 'Индика торы',
      buyer_passed_indicators_count: 'Количество индикаторов',
      buyer_risked_procedures: 'Конкурсы с риском',
      buyer_risked_procedures_with_contract: 'Конкурсов c рисками "контракт подписан"',
      buyer_risked_procedures_expected_value: 'Сумма конкурсов с рисками',
      buyer_risked_procedures_expected_value_with_contract: 'Сумма конкурсов c рисками "контракт подписан"',
      buyer_procedures_with_bad_data: 'Конкурсы с некоррек тными данными',
      buyer_weighted_rank: 'Параметр приори тезации',
      indicator_name: 'No.',
      indicator_description_name: 'Название индикатора',
      indicator_value: 'Значение',
      indicator_risks: 'Риск',
      indicator_law_violation: 'Нарушение нормы/принципа закона',
      indicator_risk_level_text: 'Уровень риска',
      indicator_comment_text: 'Комментарии',
      triggered_indicators: 'Автоматические индикаторы риска конкурса',
      start_inspection_from_prioritization_page: 'Начать аудит',
      select_template_modal_title_from_prioritization_page: 'Выбор шаблона',
      no_found_tender_by_id: 'Информация по введенному ID конкурса отсутствует',
      empty_table_data_name: 'Нет данных с такими параметрами',
      empty_data_name: 'Нет данных',

//prioritization buyer columns names for export
      buyer_identifier_name_for_export: 'ИНН закупающей организации',
      buyer_legal_name_identifier_name_for_export: 'Наименование организации',
      buyer_risk_level_name_for_export: 'Уровень риска закупающей организации',
      buyer_procedure_number_name_for_export: 'Количество конкурсов',
      buyer_procedures_expected_value_name_for_export: 'Сумма конкурсов',
      buyer_contracts_amount_name_for_export: 'Сумма контрактов',
      buyer_passed_indicator_name_list_for_export: 'Список сработавших индикаторов',
      buyer_passed_indicators_count_for_export: 'Количество сработаных индикаторов',
      buyer_risked_procedures_name_for_export: 'Количество конкурсов с рисками',
      buyer_risked_procedures_with_contract_name_for_export: 'Количество конкурсов с рисками, со статусом "контракт подписан"',
      buyer_risked_procedures_expected_value_name_for_export: 'Сумма конкурсов с рисками',
      buyer_risked_procedures_expected_value_with_contract_name_for_export: 'Сумма конкурсов с рисками, со статусом "контракт подписан"',
      buyer_procedures_with_bad_data_name_for_export: 'Количество конкурсов с некорректными данными',
      buyer_weighted_rank_name_for_export: 'Параметр приоритезации',
      buyer_default_column_region_name_name_for_export: 'Регион',
      buyer_default_column_completed_lots_count_name_for_export: 'Количество завершенных лотов',
      buyer_default_column_contracts_count_name_for_export: 'Количество контрактов',
      buyer_default_column_winner_bids_value_name_for_export: 'Сумма победивших предложений',
      buyer_default_column_passed_indicators_count_name_for_export: 'Количество сработанных уникальных индикаторов риска',
      buyer_default_column_passed_indicators_name_for_export: 'Сработанные индикаторы риска',

//prioritization tender filter
      tender_filter_method_name: 'Метод',
      tender_filter_indicator_name: 'Индикатор',
      tender_filter_start_date_period: 'Период с',
      tender_filter_end_date_period: 'Период по',
      tender_filter_select_organization: 'Выбрать организацию',
      tender_filter_OKGZ_section_name: 'Раздел ОКГЗ',
      tender_filter_sum_from_to_name: 'Сумма от и до',
      tender_filter_sum_from_name: 'Сумма от',
      tender_filter_sum_to_name: 'Сумма до',
      tender_filter_risk_level_name: 'Уровень риска',
      tender_filter_concurs_number_name: 'Номер конкурса',
      tender_filter_reset_button_name: 'Сбросить фильтр',
      tender_filter_region_name: 'Регион',
      indicator_confirmed_by_testing: 'Результат индикатора подтвердился тестированием?',
      indicator_component_impacts: 'Влияние компонента',


//prioritization tender columns names for export
      tender_procedure_identifier_name_for_export: 'Идентификатор процедуры',
      tender_public_date_name_for_export: 'Дата публикации конкурса',
      tender_guarantee_amount_name_for_export: 'Гарантийное обеспечение конкурсной заявки',
      tender_procurement_method_details_name_for_export: 'Метод конкурса',
      tender_current_stage_name_for_export: 'Стадия конкурса',
      tender_tenderers_count_name_for_export: 'Количество участников',
      tender_disqualifieds_count_name_for_export: 'Количество дисквалификаций',
      tender_suppliers_count_name_for_export: 'Количество победителей',
      tender_completed_lots_count_name_for_export: 'Количество завершенных лотов (есть выбор победителя)',
      tender_procedure_expected_value_name_for_export: 'Планируемая сумма конкурса',
      tender_procedure_currency_name_for_export: 'Валюта конкурса',
      tender_identifier_id_name_for_export: 'ИНН',
      tender_identifier_legal_name_ru_name_for_export: 'Наименование',
      tender_count_of_lots_name_for_export: 'Количество лотов',
      tender_completed_lot_value_name_for_export: 'Сумма завершенных лотов',
      tender_okgz_list_name_for_export: 'Список Разделов ОКГЗ',
      tender_okgz_name_for_export: 'Название раздела ОКГЗ',
      tender_contract_date_name_for_export: 'Дата договора (завершения конкурса)',
      tender_complaints_count_name_for_export: 'Количество жалоб',
      tender_passed_indicators_count_name_for_export: 'Количество сработаных индикаторов',
      tender_cpv_count_name_for_export: 'Список сработавших индикаторов',
      tender_procedure_risk_level_name_for_export: 'Уровень риска',
      tender_weighted_rank_name_for_export: 'Параметр приоритезации',

// AUDITOR SETTINGS
      tender_setting_header_name: 'Параметры оценки риска конкурсов',
      tender_weight_of_total_risk_purchases: 'Изменить вес параметра "суммарный риск конкурса":',
      tender_weight_the_cash_component_purchases: 'Изменить вес параметра "существенность конкурса":',
      buyer_setting_header_name: 'Параметры оценки риска и закупающих организаций',
      buyer_weight_of_weighted_average_risk_procuring: 'Изменить вес параметра "Риск закупающей организации":',
      buyer_weight_of_organizations_total_purchases: 'Изменить вес параметра "суммарная существенность конкурсов закупающей организации":',
      settings_save_successfully: 'Настройки сохранены успешно',
      settings_save_error: 'Ошибка при сохранении',

// Export button
      export_button_name: 'Экспорт в файл',
      export_button_to_pdf_name: 'Экспорт',
      export_button_file_type_name: 'Тип экспорта:',
      export_button_selected_columns_name: 'Поля для экспорта:',
      export_button_download_name: 'Скачать',
      export_button_file_default_name: '',
      export_button_default_filename_name: 'Сгенерированное имя файла:',
      export_button_custom_filename_name: 'Введите название файла:',
      export_button_custom_filename_error_message_name: 'Неверное имя файла. Допустимые символы: a-z, A-Z, а-я, А-Я, 0-9, _, -, пробел',

      result_evaluation_automatic_scoring_without_critical_information: 'Результат оценки автоматического скоринга без учета критических сведений:',
      final_assessment_representative_SP_KP: 'Итоговая оценка представителя СП КР:',
      checklist_calculate_score_button_name: 'Рассчитать',
      calculate_no_selected_buyer_message: 'Не выбрана закупающая организация',
      calculate_no_selected_tender_message: 'Не выбран конкурс',
      not_complete_checklist_indicator_message: 'Чтобы завершить контрольный лист нужно: Ответить на все индикаторы.',
      not_complete_checklist_questions_message: 'Чтобы завершить контрольный лист нужно: Ответить на все вопросы.',
      checklist_save_as_template_success_message: 'Шаблон сохранен успешно',
      checklist_save_as_template_error_message: 'Ошибка сохранения шаблона',
      not_complete_checklist_manual_score_message: 'Чтобы завершить контрольный лист нужно: Итоговая оценка представителя СП КР.',
      not_complete_checklist_summary_comment_message: 'Чтобы завершить контрольный лист нужно: Заполнить общее резуме аудита.',
      not_complete_manual_buyer_score_message: 'Чтобы завершить контрольный лист нужно: Заполнить вывод представителя.',
      calculate_no_kpi_indicators_answer_message: 'Нету ответов на сработанные индикаторы',
      calculate_no_questions_answers_message: 'Нету ответов на все вопросы',
      no_conclusion_of_the_representative_message: 'Не заполнен вывод представителя СП КР',
      checklist_buyer_or_question_change_message: 'Были изменены условия для подсчета оценки. Нажмите кнопку "Рассчитать"',
      checklist_question_selected_as_missing_message: 'По всем вопросам контрольного листа был выбран ответ "Не применимо". Расчет автоматической оценки результатов не возможен. Пересмотрите ответы, либо используйте другой шаблон контрольного листа.',

//Checklist inspection form
      procurement_audit_name: 'Аудит закупок:',
      inspection_audit_name: 'Название аудита:',
      inspection_period_of_the_audit_name: 'За период:',
      inspection_checked_organization_name: 'Проверяемая организация:',
      inspection_date_of_completion_name: 'Дата заполнения:',
      inspection_contract_number_name: 'Договор No:',
      inspection_amount_of_the_deal_name: 'Сумма Договора:',
      inspection_description_of_the_contract_name: 'Описание договора:',
      inspection_contractor_name: 'Подрядчик:',
      inspection_auditor_comment_name: 'Краткое изложение проблем и спорных вопросов. Общее резюме обзора:',
      inspection_published_date_on_portal_name: 'Дата публикации объявления на портале:',
      inspection_date_start_concurs_name: 'Дата начала подачи конкурсных заявок:',
      inspection_date_end_concurs_name: 'Окончательный срок подачи конкурсных заявок:',
      inspection_amount_of_concurs_name: 'Дата вскрытия конкурсных заявок:',
      inspection_date_disclosed_concurs_name: 'Размер гарантии конкурсной заявки:',
      inspection_contract_date_of_concurs_name: 'Дата заключения договора:',
      checked_organization_name: 'Проверяемая организация:',
      date_name: 'Дата:',
      contract_number_name: 'Договор No',
      the_amount_of_the_deal_name: 'Сумма Договора:',
      description_of_the_contract_name: 'Описание договора:',
      contractor_name: 'Подрядчик:',
      summary_of_issues_and_issues_name: 'Краткое изложение проблем и спорных вопросов: Общее резюме обзора.',

      alert_info_title: 'Информационная заметка',
      alert_warning_title: 'Предупреждение',
      calendar_warning_message: 'Неправильно отмеченные дни в календаре приведут к ошибкам при подсчете некоторых индикаторов (14, 15, 16...)',
      calendar_non_saved_days_warning_message: 'Этих дней еще нету в базе данных. Они добавятся после сохранения.',
      buyer_no_tenders_message: 'У этого покупателя нет тендеров',
      auditor_conclusion_by_result_of_inspection: 'Вывод представителя СП КР по результатам тестирования процедур:',

//Checklists filters form
      only_my_checklists_name: 'Только мои',
      checklist_template_type_name: 'Тип шаблона контрольного листа',
      checklist_status_name: 'Статус',
      checklist_audit_name: 'Название аудита',
      checklist_template_name: 'Шаблон',
      checklist_document_number_name: 'Номер документа',
      checklist_scores_result_name: 'Оценка результатов',
      checklist_date_of_completion_name: 'Дата заполнения',
      checklist_Initiated_name: 'Инициирован',
      checklist_status_complete_name: 'Завершен',
      checklist_status_not_complete_name: 'Не завершен',
      changes_you_made_may_not_be_saved: 'Внесенные вами изменения не будут сохранены.',
    },
  },
}