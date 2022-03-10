import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/userReducer';
import { walletReducer } from './wallet/walletReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'wallet'],
    transforms: [],
};

const rootReducer = combineReducers({
    user: userReducer,
    wallet: walletReducer,
});

export default persistReducer(persistConfig, rootReducer);
