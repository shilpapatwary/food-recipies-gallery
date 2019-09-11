import { RecipeItem } from '../redux/types';

export const recipes:Array<RecipeItem> = [{
    fields: {
        title: "sample title",
        photo: { fields: { file: { url: "image_url" } } },
        chef: { fields: { name: "chef name" } },
        description: "sample description",
        tags: [{ fields: { name: "vegan" }, sys:{id:"1"} }, { fields: { name: "vegetarian" }, sys:{id:"2"} }]
    },
    sys: { id: "123" }
}
]
