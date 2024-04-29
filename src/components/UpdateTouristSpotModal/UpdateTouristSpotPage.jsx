import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateTouristSpotPage = ({id}) => {

    const {register, reset , handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log("id:",id, "Updated Data:",data);
        // const updatedSpot = data;
        // console.log(updateSpot);

        fetch(`https://explore-southeast-aisa-server-76sk981xb.vercel.app/updateSpot/${id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount > 0){

                toast.success("Tourist Spot Updated Successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });

                navigate(location?.pathname || '/myList')

                reset();
            }
          })
    }

    return (
        <div className="p-5 md:p-16 shadow-xl">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-5 text-center">Update a Tourist Spot</h1>
            

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* form spot name and location row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Name</span>
                        </label>
                        <input type="text" name="spot" placeholder="Enter Tourists Spot Name..." className="input input-bordered" {...register("spot")} required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Enter Spot Location..." className="input input-bordered" {...register("location")} required />
                    </div>
                </div>

                {/* form spot name and location row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Country Name:</span>
                        </label>
                        <input type="text" name="country" placeholder="Enter Country Name..." className="input input-bordered" {...register("country")} required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Enter Season Name(ex. summer)..." className="input input-bordered" {...register("seasonality")} required />
                    </div>
                </div>

                {/* form Seasonality and Average Cost row */}
                <div className="md:flex gap-5 md:mb-8">
                <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Travel Time</span>
                        </label>
                        <input type="text" name="time"  placeholder="Enter Travel Time(ex. 7 days)..." className="input input-bordered" {...register("time")} required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Average Cost</span>
                        </label>
                        <input type="number" name="cost"  placeholder="Enter Average Cost $(US Dollar)..." className="input input-bordered" {...register("cost")} required />
                    </div>
                </div>

                {/* form Total Visitors Per Year and Spot Photo URL row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="visitors" placeholder="Enter total Visitors Per Year.." className="input input-bordered" {...register("visitors")} required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="Enter Tourist Spot Photo URL..." className="input input-bordered" {...register("photo")} required />
                    </div>

                </div>

                {/* Short Description row */}
                <div className="mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <textarea name='description' placeholder="Enter Spot Short Description..." className="textarea textarea-bordered textarea-lg w-full"  {...register("description")} required ></textarea>
                </div>

                <input type="submit" value="UPDATE SPOT" className="btn w-full bg-black text-white" />
            </form>
            <ToastContainer />
        </div>
    );
};

UpdateTouristSpotPage.propTypes={
    id: PropTypes.string,
}

export default UpdateTouristSpotPage;