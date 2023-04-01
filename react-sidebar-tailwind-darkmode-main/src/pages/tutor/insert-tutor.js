import { Radio, DatePicker, Upload } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';

const InsertTutor = () => {
    const dateFormat = 'YYYY/MM/DD';

    return <body class="antialiased font-sans bg-gray-200">
        <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">Users Insert</h2>
                </div>


                </div>

                <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            // onChange={handleChange}
        >
            <img
               // src={imageUrl}
                alt="avatar"
                style={{
                width: '100%',
                }}
            />
            
        </Upload>
            <TextArea placeholder="FullName" autoSize />
            <br />

            <br />
            <TextArea placeholder="Email" autoSize />
            <br />
            <br />
            <TextArea placeholder="Phone" autoSize />
            <br />
            <br />
            <TextArea placeholder="Address" autoSize />
            <br />
            <br />
            <TextArea placeholder="University" autoSize />
            <br />
            <br />
            <TextArea placeholder="Major" autoSize />
            <br />
            <br />
            <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
            </Radio.Group>
            <br />
            <br />
            <Radio.Group name="radiogroup2" defaultValue={1}>
                <Radio value={1}>Graduated</Radio>
                <Radio value={2}>Student</Radio>
            </Radio.Group>
            <br />
            <br />
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} placeholder="BirthDay" format={dateFormat} />
            <br />
            <br />
            <TextArea rows={4} placeholder="Description your experients" maxLength={4} />
            <br />
            <br />
            <TextArea placeholder="Subject" autoSize />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    </body>


}

export default InsertTutor
