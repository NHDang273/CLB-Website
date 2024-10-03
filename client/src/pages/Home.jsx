import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";



const Home = () => {
  // const [posts, setPosts] = useState([]);
  const [setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  const posts = [
    {
      id: 1,
      title: "Trí Tuệ Nhân Tạo: Tương Lai Của Công Nghệ",
      desc: "Trí tuệ nhân tạo (AI) đang cách mạng hóa cách chúng ta tương tác với công nghệ. Từ việc tự động hóa quy trình sản xuất đến cải thiện trải nghiệm khách hàng, AI đang tạo ra những thay đổi sâu rộng trong mọi lĩnh vực.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "AI Trong Y Tế: Cách Mạng Trong Chẩn Đoán",
      desc: "Trí tuệ nhân tạo đang đóng vai trò ngày càng quan trọng trong ngành y tế, giúp cải thiện khả năng chẩn đoán và điều trị bệnh nhân. Những hệ thống AI hiện nay có khả năng phân tích dữ liệu y tế và đưa ra các dự đoán chính xác.",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Trí Tuệ Nhân Tạo và Tương Lai Của Làm Việc",
      desc: "Với sự phát triển của AI, mô hình làm việc của chúng ta đang thay đổi. Công nghệ AI không chỉ thay thế một số công việc mà còn tạo ra những cơ hội mới trong lĩnh vực công nghệ, nghệ thuật và nhiều lĩnh vực khác.",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "AI Trong Giáo Dục: Hỗ Trợ Học Tập Cá Nhân Hóa",
      desc: "Trí tuệ nhân tạo đang được ứng dụng để tạo ra những trải nghiệm học tập cá nhân hóa hơn cho học sinh. Những hệ thống AI có thể theo dõi tiến trình học tập và đề xuất các tài liệu phù hợp với nhu cầu của từng cá nhân.",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
            <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;