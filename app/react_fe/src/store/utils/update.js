export const update = (Obj, updatedProperties) => {
    return {
        ...Obj,
        ...updatedProperties
    };
};
