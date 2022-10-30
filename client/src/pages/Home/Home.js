import React from 'react'
import Back from './Homeimage/homeback.jpg'
import './style.css'

function Home(){
    return(
    <div className='Home' style={{position: 'relative'}}>
        <img src ={Back} />
        <div className='information'>
            <div className='infortext'>
                <p style={{textAlign:'center',fontSize: '30px'}}>
                    Lời nói đầu
                </p>
                <p>
                Thế giới xung quanh ta có vô vàn sự vật và hiện tượng phong phú và đa dạng. Nhưng dù phong phú và đa dạng đến đâu thì cũng quy về hai lĩnh vực: vật chất và ý thức. Có rất nhiều quan điểm triết học xoay quanh vấn đề về mối quan hệ giữa vật chất và ý thức, nhưng chỉ có quan điểm triết học Mác – Leenin là đúng và đầy đủ đó là: vật chất là cái có trước, ý thức là cái có sau. Vật chất quyết định sự ra đời của ý thức, đồng thời ý thức tác động trở lại vật chất.

Trước năm 1986, đất nước ta đã gặp rất nhiều khó khăn bởi một nền kinh tế trì trệ, một hệ thống quản lí yếu kém cũng là do một phần không nhận thức đúng và đầy đủ về mối quan hệ giữa vật chất và ý thức. Vấn đề này được nhận thức đúng sau đổi mới ở đại hội VI, và quả nhiên đã giành rất nhiều thắng lợi sau khi đã chuyển nền kinh tế từ cơ chế quan liêu bao cấp sang cơ chế thị trường có sự quản lí của nhà nước theo định hướng xã hội chủ nghĩa.

Với mong muốn tìm hiểu thêm về vấn đề này, em đã chọn đề tài: “Phân tích mối quan hệ giữa vật chất và ý thức vận dụng vào việc xây dựng xã hội chủ nghĩa ở nước ta.”
                </p>
            </div>
        </div>
    </div>
    );
}
export default Home;