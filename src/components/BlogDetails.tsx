type BlogDetailsProps = {
  name: string;
  date: string;
  comment: string;
};

const BlogDetails = ({ name, date, comment }: BlogDetailsProps) => {
  return (
    <div className="w-full flex flex-col items-center mt-3">
      <a href="#" className="text-center font-bold text-xs">
        {name}
      </a>
      <div className="flex justify-between w-full">
        <a href="#" className="text-left font-bold text-xs">
          {date}
        </a>
        <a href="#" className="text-right font-bold text-xs">
          {comment}
        </a>
      </div>
      <div className="flex justify-end w-full mt-1">
        <a href="#" className="text-blue-500">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogDetails;
