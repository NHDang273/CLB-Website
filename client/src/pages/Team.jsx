import React, { useEffect, useState } from 'react';
import '../style.scss'; // Nhập tệp CSS của bạn
import member_img from '../img/logo.png';

const Team = () => {
  // State để lưu trữ dữ liệu thành viên
  const [members, setMembers] = useState({
    president: null,
    vicePresident: null,
    secretary: null,
    members: [],
  });

  // Dữ liệu mẫu (dummy data)
  const dummyData = {
    president: {
      name: 'Nguyễn Văn A',
      role: 'Chủ tịch',
      description: 'Nguyễn Văn A là người sáng lập câu lạc bộ và có nhiều năm kinh nghiệm trong lĩnh vực lập trình.',
      image: member_img,
    },
    vicePresident: {
      name: 'Trần Thị B',
      role: 'Phó Chủ tịch',
      description: 'Trần Thị B chuyên về phát triển phần mềm và quản lý dự án.',
      image: member_img,
    },
    secretary: {
      name: 'Lê Văn C',
      role: 'Thư ký',
      description: 'Lê Văn C là người quản lý tài liệu và các sự kiện của câu lạc bộ.',
      image: member_img,
    },
    members: [
      {
        name: 'Phạm Thị D',
        role: 'Thành viên',
        description: 'Phạm Thị D là một lập trình viên trẻ đam mê công nghệ và học hỏi.',
        image: member_img,
      },
      {
        name: 'Nguyễn Văn E',
        role: 'Thành viên',
        description: 'Nguyễn Văn E là một sinh viên đang học hỏi về lập trình.',
        image: member_img,
      },
    ],
  };

  useEffect(() => {
    // Giả lập việc fetch dữ liệu từ database
    setMembers(dummyData);
  }, []);

  return (
    <div className="team">
      <h2>Đội Ngũ Chúng Tôi</h2>

      {/* <h3>{members.president.role}</h3> */}
      <h3>Chủ tịch</h3>
      {/* Hiển thị Chủ tịch */}
      {members.president && (
        <div className="team-row">
          <div className="team-member">
            <img src={members.president.image} alt={members.president.name} />
            <h4>{members.president.name}</h4>
            <p>{members.president.description}</p>
          </div>
        </div>
      )}

    {/* <h3>{members.vicePresident.role}</h3> */}
    <h3>Phó Chủ tịch</h3>
      {/* Hiển thị Phó Chủ tịch */}
      {members.vicePresident && (
        <div className="team-row">
          <div className="team-member">
            <img src={members.vicePresident.image} alt={members.vicePresident.name} />
            <h4>{members.vicePresident.name}</h4>
            <p>{members.vicePresident.description}</p>
          </div>
        </div>
      )}
    {/* <h3>{members.secretary.role}</h3> */}
    <h3>Thư kí</h3>
      {/* Hiển thị Thư ký */}
      {members.secretary && (
        <div className="team-row">
          <div className="team-member">
            <img src={members.secretary.image} alt={members.secretary.name} />
            <h4>{members.secretary.name}</h4>
            <p>{members.secretary.description}</p>
          </div>
        </div>
      )}

    <h3>Thành viên</h3>
      {/* Hiển thị Thành viên */}
      {members.members.length > 0 && (
        <div className="team-row">
          {members.members.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
