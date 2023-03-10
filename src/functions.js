import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function show_alert(message, icon, focus){
    onFocus(focus)
    const mySwal = withReactContent(Swal);
    mySwal.fire({
        title:message,
        icon:icon
    });
}

function onFocus(focus){
    if(focus !==''){
        document.getElementById(focus).focus();
    }
}