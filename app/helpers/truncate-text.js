import { helper } from '@ember/component/helper';

export function truncateText(params) {
    if (!params[0] || params[0].length <= params[1]){
        return params[0];
    } else {
        return params[0].substring(0, params[1]) + "...";
    }
  
}

export default helper(truncateText);
