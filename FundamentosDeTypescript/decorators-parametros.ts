
function logParameter(target, propertyName, index) {
    const metadatakey = `log_${propertyName}_parameters`;
    if(Array.isArray(target[metadatakey])){
        target[metadatakey].push(index);
    } else {
        target[metadatakey] = [index];
    }
}

class P9 {

    greet(@logParameter message: string): string {
        return message;
    }

}

const p9 = new P9();
p9.greet('Hey');