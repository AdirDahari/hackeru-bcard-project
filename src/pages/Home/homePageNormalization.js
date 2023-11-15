const homePageNormalization = (dataFromServer, id) => {
    for (let user of dataFromServer) {
        // if (user.likes.find((userId) => userId === id)) {
        //   user.likes = true;
        // } else {
        //   user.likes = false;
        // }
        user.likes = Boolean(user.likes.find((userId) => userId === id));
    }
    return dataFromServer;
};

const likeNormalization = (likeCard) => {
    console.log("likeNormalization", likeCard);
    let response = {
        title: likeCard.title,
        subtitle: likeCard.subtitle,
        description: likeCard.description,
        phone: likeCard.phone,
        email: likeCard.email,
        web: likeCard.web,
        image: {
            url: likeCard.image.url,
            alt: likeCard.image.alt
        },
        address: {
            state: likeCard.address.state,
            country: likeCard.address.country,
            city: likeCard.address.city,
            street: likeCard.address.street,
            houseNumber: likeCard.address.houseNumber,
            zip: likeCard.address.zip
        }
    }
    return response;
}
export { homePageNormalization, likeNormalization };