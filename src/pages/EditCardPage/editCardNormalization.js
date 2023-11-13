const editCardNormalization = (inputs) => {
    let respone = {
        title: inputs.title,
        subtitle: inputs.subtitle,
        description: inputs.description,
        phone: inputs.phone,
        email: inputs.email,
        web: inputs.web,
        image: {
            url: inputs.url,
            alt: inputs.alt,
        },
        address: {
            state: inputs.state,
            country: inputs.country,
            city: inputs.city,
            street: inputs.street,
            houseNumber: +inputs.houseNumber,
            zip: +inputs.zip,
        },
    }
    return respone;
}
export default editCardNormalization;