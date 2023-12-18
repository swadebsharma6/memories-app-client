import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/AxiosPublic";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Form = () => {

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data)

    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const postItem = {
        name: data.name,
        title: data.title,
        tags: data.tags,
        message: data.message,
        image: res.data.data.display_url,
      };
      // now send data to database by axiosSecure;

      const post = await axiosPublic.post("/post", postItem );
      console.log(post.data);

      if (post.data.insertedId) {
        // show success popup
        Swal.fire({
          position: "top",
          icon: "success",
          title: "successfully added Memories",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
    // console.log(res.data);
  };

    return (
       <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Creator</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Creator Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="md:flex gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Tags</span>
              </label>
              <input
                type="text"
                {...register("tags", { required: true })}
                placeholder="Tags"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-success"
              {...register("message")}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose File</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Submit Post
          </button>
        </form>
      </div>
    </div>
    );
};

export default Form;