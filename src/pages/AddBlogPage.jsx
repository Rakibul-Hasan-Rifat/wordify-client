import useAuth from "./../hooks/useAuth";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const AddBlogPage = () => {
  const { user } = useAuth();
  const handleAddBlog = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.popular_recipes = data.popular_recipes.split(",");
    data.ingredients_used = data.ingredients_used.split(",");
    data.reviws = [];
    data.chef = {
      name: user?.displayName,
      experience: `${Math.ceil(Math.random() * 10)} years`,
      specialty: data?.title,
    };

    console.log(data);

    fetch(
      `${import.meta.env.VITE_server_url}/blogs/blog-details/${Math.random()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include"
      }
    )
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="py-8 px-5 max-w-lg mx-auto rounded-2xl bg-gray-400/20 shadow-lg">
      <form onSubmit={handleAddBlog} className="flex flex-col gap-2">
        <FormControl>
          <InputLabel htmlFor="component-outlined">Title</InputLabel>
          <OutlinedInput name="title" label="Title" id="component-outlined" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">URL</InputLabel>
          <OutlinedInput name="url" label="URL" id="component-outlined" />
        </FormControl>
        <div className="flex justify-between gap-1">
          <FormControl>
            <InputLabel htmlFor="category">Category</InputLabel>
            <OutlinedInput id="category" name="category" label="Category" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
            <OutlinedInput
              id="difficulty"
              name="difficulty"
              label="difficulty"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="difficulty">Rating</InputLabel>
            <OutlinedInput id="rating" name="rating" label="rating" />
          </FormControl>
        </div>
        <div className="flex justify-between items-center gap-2">
          <FormControl>
            <InputLabel htmlFor="price">Price</InputLabel>
            <OutlinedInput
              name="price"
              id="price"
              label="price"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="prep_time">Prep Time</InputLabel>
            <OutlinedInput name="prep_time" id="prep_time" label="Prep_Time" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="recipes_count">Recipes Count</InputLabel>
            <OutlinedInput
              name="recipes_count"
              id="recipes_count"
              label="recipes_count"
            />
          </FormControl>
        </div>
        <FormControl>
          <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
          <OutlinedInput
            name="ingredients_used"
            id="ingredients"
            label="ingredients"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="popular_recipes">Recipes by comma</InputLabel>
          <OutlinedInput
            name="popular_recipes"
            id="popular_recipes"
            label="popular_recipes"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <OutlinedInput
            name="description"
            id="description"
            label="description"
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" size="large">
          Add a Blog
        </Button>
      </form>
    </div>
  );
};

export default AddBlogPage;
