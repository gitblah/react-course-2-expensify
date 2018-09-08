import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }); 
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount'); 
});

test('should set sortBy to date', () => {
    const currentState = {
        test: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE' };
    
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date'); 
});

test('should set text filter', () => {
    const text = 'this is a filter';
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text})
    expect(state.text).toBe(text); 
});

test('should set startdate filter', () => {
    const startDate = moment();
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate})
    expect(state.startDate).toEqual(startDate); 
});

test('should set enddate filter', () => {
    const endDate = moment();
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate})
    expect(state.endDate).toEqual(endDate); 
});