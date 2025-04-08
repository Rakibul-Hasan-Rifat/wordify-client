import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdatePage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  const {
    title,
    url,
    difficulty,
    category,
    prep_time,
    price,
    recipes_count,
    description,
    popular_recipes,
    ingredients_used,
  } = blog;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_server_url}/blogs/blog-details/${blogId}`)
      .then((res) => res.json())
      .then((result) => setBlog(result));
  }, [blogId]);

  console.log("update page", blog);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("btn clicked", e.target.title.value);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    fetch(`${import.meta.env.VITE_server_url}/blogs/blog-details/${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include"
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="py-8 px-5 max-w-lg mx-auto rounded-2xl bg-gray-400/20 shadow-lg">
      <form onSubmit={handleUpdate} className="flex flex-col gap-2">
        <FormControl>
          <InputLabel htmlFor="component-outlined">Title</InputLabel>
          <OutlinedInput
            name="title"
            id="component-outlined"
            defaultValue={title}
            label="Title"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">URL</InputLabel>
          <OutlinedInput
            name="url"
            id="component-outlined"
            defaultValue={url}
            label="URL"
          />
        </FormControl>
        <div className="flex justify-between">
          <FormControl>
            <InputLabel htmlFor="category">Category</InputLabel>
            <OutlinedInput
              name="category"
              id="category"
              defaultValue={category}
              label="Category"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
            <OutlinedInput
              name="difficulty"
              id="difficulty"
              defaultValue={difficulty}
              label="difficulty"
            />
          </FormControl>
        </div>
        <div className="flex justify-between items-center gap-2">
          <FormControl>
            <InputLabel htmlFor="price">Price</InputLabel>
            <OutlinedInput
              name="price"
              id="price"
              label="price"
              defaultValue={price}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="prep_time">Prep Time</InputLabel>
            <OutlinedInput
              name="prep_time"
              id="prep_time"
              label="Prep_Time"
              defaultValue={prep_time}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="recipes_count">Recipes Count</InputLabel>
            <OutlinedInput
              name="recipes_count"
              id="recipes_count"
              label="recipes_count"
              defaultValue={recipes_count}
            />
          </FormControl>
        </div>
        <FormControl>
          <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
          <OutlinedInput
            name="ingredients_used"
            id="ingredients"
            label="ingredients"
            defaultValue={ingredients_used}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="popular_recipes">Recipes by comma</InputLabel>
          <OutlinedInput
            name="popular_recipes"
            id="popular_recipes"
            label="popular_recipes"
            defaultValue={popular_recipes}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <OutlinedInput
            name="description"
            id="description"
            label="description"
            defaultValue={description}
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" size="large">
          Update Blog
        </Button>
      </form>
    </div>
  );
};

export default UpdatePage;
