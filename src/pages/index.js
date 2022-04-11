import Layout from "../components/Layout";
import Feed from "../components/Feed";

function Index({ post = [] }){
    return(
    <Layout>
        <Feed post = {post} ></Feed>
    </Layout>
    );
}

export default Index;