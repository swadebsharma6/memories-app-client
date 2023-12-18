import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";


const Home = () => {
    return (
        <section className="p-4">
        <div className="grid md:grid-cols-3 gap-4">
        
        <div className="md:col-span-2 border border-purple-500 min-h-screen">
        <Posts></Posts>
        </div> 
        <div className="md:col-span-1  min-h-screen ">
        <Form></Form>
        </div>
       
      </div>
        </section>
    );
};

export default Home;