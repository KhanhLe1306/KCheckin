import { toast } from "react-toastify";

const useToaster = () => {
    function toastSuccess(message: string) {
        toast(message);
    }
    function toastFailure(message: string) {
        toast(message);
    }

    return {toastSuccess, toastFailure}
};

export default useToaster;
