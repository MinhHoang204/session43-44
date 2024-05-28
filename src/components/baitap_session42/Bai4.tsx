import {useState} from 'react'

export default function Bai4() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
    };
  return (
    <div>Bai4
        <button className="dropdown-toggle" type="button" data-toggle="dropdown">
            Nguyễn Văn Nam
        </button>
        <div className="dropdown-menu">
            <button
                className="dropdown-item"
                onClick={() => handleOptionSelect('Cài đặt')}
            >
                Cài đặt
            </button>
            <button
                className="dropdown-item"
                onClick={() => handleOptionSelect('Đổi mật khẩu')}
            >
               Đổi mật khẩu
            </button>
            <button
                className="dropdown-item"
                onClick={() => handleOptionSelect('Đăng xuất')}
            >
               Đăng xuất
        </button>
      </div>
    </div>
  )
}
