import React from 'react';
import groupPhoto from '../img/gr.webp'; // Đảm bảo thay đổi đường dẫn cho đúng
import '../style.scss';

const About = () => {
  return (
    <div className="about">
      {/* Phần giới thiệu */}
      <h2>Về Chúng Tôi</h2>
      <img src={groupPhoto} alt="Câu lạc bộ Lập trình" className="about-image" />
      <p>
        Câu Lạc Bộ Lập Trình được thành lập vào năm 2015 với mục tiêu trở thành 
        một cộng đồng cho những người yêu thích công nghệ và lập trình. Chúng tôi 
        cung cấp một môi trường học tập thú vị và tích cực cho các thành viên.
      </p>
      
      {/* Tầm nhìn và sứ mệnh */}
      <h3>Tầm Nhìn & Sứ Mệnh</h3>
      <p>
        Sứ mệnh của chúng tôi là thúc đẩy sự sáng tạo và phát triển kỹ năng lập trình 
        cho tất cả các thành viên. Chúng tôi tổ chức các sự kiện, hội thảo và các 
        khóa học để giúp sinh viên tiếp cận với các công nghệ mới nhất và trở thành 
        những lập trình viên xuất sắc.
      </p>
      
      {/* Các lĩnh vực hoạt động */}
      <h3>Các Lĩnh Vực Hoạt Động</h3>
      <ul>
        <li>Lập trình web (HTML, CSS, JavaScript, React)</li>
        <li>Phát triển phần mềm (Java, C++, Python)</li>
        <li>Khoa học dữ liệu và AI</li>
        <li>Phát triển ứng dụng di động (Android, iOS)</li>
      </ul>
      
      {/* Thành tựu của câu lạc bộ */}
      <h3>Thành Tựu</h3>
      <p>
        Chúng tôi tự hào về những thành tựu đã đạt được, bao gồm nhiều giải thưởng 
        tại các cuộc thi lập trình trong nước và quốc tế. Trong năm 2022, chúng tôi 
        đã giành giải Nhất tại cuộc thi Hackathon và giải Ba tại cuộc thi Olympic 
        Tin học toàn quốc.
      </p>

      {/* Hoạt động và sự kiện nổi bật */}
      <h3>Hoạt Động & Sự Kiện Nổi Bật</h3>
      <p>
        Câu lạc bộ thường xuyên tổ chức các buổi workshop và seminar với sự tham gia 
        của các chuyên gia trong ngành công nghệ, giúp các thành viên được cập nhật 
        các kiến thức mới nhất. Chúng tôi cũng tổ chức các buổi hackathon nội bộ để 
        khuyến khích tinh thần học hỏi và sáng tạo.
      </p>
      <p>
        Một số sự kiện đáng chú ý mà chúng tôi đã tổ chức bao gồm:
        <ul>
          <li>Hackathon 2021: "Innovative Solutions for Social Impact"</li>
          <li>Seminar 2022: "Machine Learning and AI in Real World"</li>
          <li>Workshop 2023: "Building Progressive Web Apps"</li>
        </ul>
      </p>
      
      {/* Tương lai và định hướng phát triển */}
      <h3>Tương Lai & Định Hướng Phát Triển</h3>
      <p>
        Trong tương lai, Câu Lạc Bộ Lập Trình mong muốn mở rộng các hoạt động và hợp tác 
        với nhiều doanh nghiệp trong ngành công nghệ để mang lại thêm nhiều cơ hội cho 
        các thành viên. Chúng tôi sẽ tiếp tục nâng cao chất lượng và đa dạng hóa nội dung 
        đào tạo nhằm giúp các thành viên phát triển toàn diện kỹ năng của mình.
      </p>
    </div>
  );
};

export default About;
