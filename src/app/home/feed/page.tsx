import Feed from "@/components/Feed/Feed";

const FeedHome = () => {
  return (
    <Feed
      feed={
        "The useRouter hook allows you to programmatically change routes from Client Components. For Server Components, you would redirect() instead."
      }
      url={
        "https://t3.ftcdn.net/jpg/05/57/20/16/360_F_557201692_P86sh0v8g00VseZacjBOOKJmGLSvEpQb.jpg"
      }
      name={"Savita"}
      postedAt={"10 minutes ago"}
    />
  );
};
export default FeedHome;
