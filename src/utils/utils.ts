export const isObject = (item: any): boolean => {
    return (item && typeof item === 'object' && !Array.isArray(item));
};

export const deepMerge = (target: any, ...sources: any[]): any => {
    if (!sources.length) return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {
                    [key]: {}
                });
                deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, {
                    [key]: source[key]
                });
            }
        }
    }
    return deepMerge(target, ...sources);
};

export const modifyItemNameInArrayById = (arr: any, obj: any): any => {
    return arr.map((item: any) =>
        item.id === obj.id ? { ...item, name: obj.name } : item
    );
};

export const removeItemByParsedId = (arr: any, obj: any): any => {
    const idParsed = parseInt(obj, 10);
    return arr.filter((item: any) => item.id !== idParsed);
};

export const filterByProp = (array: any, prop: any, value: any): [] => {
    return array.filter((el: any) =>
        el[prop].toLowerCase().includes(value.toLowerCase())
    );
};
