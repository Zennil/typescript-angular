
type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object) => void;

type SendRequest = (cb: CallBack) => void;

const sendRequest: SendRequest = (callBack: CallBack): void => {
    if (callBack) {
        callBack(null, { messaje: 'Todo salió bien' });
    }
}