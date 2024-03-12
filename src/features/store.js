import {configureStore} from '@reduxjs/toolkit'
import activeTab from './activeTab'

export const store = configureStore({
    reducer:{
        activeTab: activeTab
    }
})