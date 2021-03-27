const getChartInfo = ( state={}, action ) => {
    switch( action.type ) {
        case 'SET_CHART_INFO':
            return action.payload;
        default:
            return state;
    }
}

export default getChartInfo;