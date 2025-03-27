import React from "react";
import { useParams, Link } from "react-router-dom";
import SocialShare from "../../components/Common/SocialShare";
import { blogs } from "../../utils/data";



const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-red-500 text-xl py-12">Blog not found</div>;
  }

  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[450px] ">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blog.image})` }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-3">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">{blog.title}</h1>
        <h2 className=' text-neutral-500 font-bold text-2xl  mt-8 mb-4'>{blog.heading}</h2>
        {blog.content?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className=" text-neutral-500 font-bold text-2xl mb-4' ">{blog.heading1}</h2>
        {blog.content1?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        {blog?.contentList1?.map((item, index) => (
          <div key={index} className="">
            <h3 className="text-md font-bold text-neutral-500 ">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
        <h2 className=" text-neutral-500 font-bold text-2xl mb-4'">{blog.heading2}</h2>
        {blog.content2?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}

        <div className="space-y-4">
          {blog?.contentList2?.map((item, index) => (
            <div key={index} className="">
              <h3 className="text-md font-bold text-neutral-500">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <ul className="list-disc list-inside ml-4 space-y-3 text-neutral-500">
          {blog?.dataList2?.map((item, index) => (
            <li key={index} className="text-md ">
              {item.point}
            </li>
          ))}
        </ul>
        {blog.subcontent2?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className=" text-neutral-500 font-bold text-2xl mb-4'">{blog.heading3}</h2>
        {blog.content3?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}

        {blog?.dataParagraph?.map((item, index) => (
          <div key={index} className="text-md text-neutral-500 gap-2">
            <p className=" "><span className="font-bold">{item.heading}</span>{item.paragraph}</p>

          </div>
        ))}

        <h2 className=" text-neutral-500 font-bold text-2xl mb-4'">{blog.heading4}</h2>
        {blog.content4?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>

        ))}
        <ul className="list-decimal list-inside ml-4 space-y-3 text-neutral-500">
          {blog?.dataList4?.map((item, index) => (
            <li key={index} className="text-md ">
              {item.point}
            </li>
          ))}
        </ul>
        <h2 className=" text-neutral-500 font-bold text-2xl mb-4'">{blog.heading5}</h2>
        {blog.content5?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <ul className="list-disc list-inside ml-4 space-y-3 text-neutral-500">
          {blog?.dataList5?.map((item, index) => (
            <li key={index} className="text-md ">
              {item.point}
            </li>
          ))}
        </ul>

        <h2 className=" text-neutral-500  font-bold text-2xl mb-4'">{blog.heading6}</h2>
        {blog.content6?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className=" text-neutral-500  font-bold text-2xl mb-4'">{blog.heading7}</h2>
        {blog.content7?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading8}</h2>
        {blog.content8?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading9}</h2>
        {blog.content9?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <ul className="list-disc list-inside ml-4 space-y-3 text-neutral-500">
          {blog?.dataList9?.map((item, index) => (
            <li key={index} className="text-md ">
              {item.point}
            </li>
          ))}
        </ul>
        {blog.subcontent9?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading10}</h2>
        {blog.content10?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <ul className="list-disc list-inside ml-4 space-y-3 text-neutral-500">
          {blog?.dataList10?.map((item, index) => (
            <li key={index} className="text-md ">
              {item.point}
            </li>
          ))}
        </ul>
        {blog.subcontent10?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading11}</h2>
        {blog.content11?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <ul className="list-disc list-inside ml-4 space-y-3 text-neutral-500">
          {blog?.dataList11?.map((item, index) => (
            <li key={index} className="text-md ">
              {item.point}
            </li>
          ))}
        </ul>
        {blog.subcontent11?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading12}</h2>
        {blog.content12?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <ul className="list-disc list-inside ml-4 space-y-3 text-neutral-500">
          {blog?.dataList12?.map((item, index) => (
            <li key={index} className="text-md ">
              {item.point}
            </li>
          ))}
        </ul>
        {blog.subcontent12?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading13}</h2>
        {blog.content13?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading14}</h2>
        {blog.content14?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading15}</h2>
        {blog.content15?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading16}</h2>
        {blog.content16?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        <h2 className="   text-neutral-500 font-bold text-2xl mb-4'">{blog.heading17}</h2>
        {blog.content17?.split("\n\n")?.map((para, index) => (
          <p key={index} className="text-gray-600 text-md mt-2">
            {para}
          </p>
        ))}
        {/* Social Share Buttons */}
        <div className="mt-12">
          <SocialShare />
        </div>

      </div>


    </>



  );
};

export default BlogDetail;