import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Editbook = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();
    const bookCategories = [
        "Fiction",
        "Historical Fiction",
        "Mistery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "History",
        "Bibliography",
        "Autobliography",
        "History",
        "Self-Help",
        "Memoir",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design",
        "Business",
        "Biology",
        "Chemical",
        "Physycology"
    ]

    const [selectbookCategories, setSelectCategories] = useState(category);

    const handleChangeSelectdValue = (evt) => {
        console.log(evt.target.value);
        setSelectCategories(evt.target.value);
    }

    const handleUpdateSubmission = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(event);
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
        }
        console.log(id);

        fetch(`http://localhost:5678/books/updateBook/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)
        }
        ).then((res) => {
            alert("Edit complete");
            navigate('/admin/dashboard/managebook');
            //console.log(res.data);
        }).catch((err) => {
            console.log("Error", err);
        });
    }

    const handleCancelSubmission = (event) => {
        event.preventDefault();
        navigate('/admin/dashboard/managebook');
    }

    return (
        <div className="px-4 my-12 py-4">
            <h2 className='mb-8 text-3xl font-bold'>Edit book</h2>
            <form onSubmit={handleUpdateSubmission} className="flex flex-col lg:w-[1180px]  gap-4">
                {/* first row */}
                <div className="flex gap-8">
                    {/* Book title */}
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="booktitle" value="Book title" />
                        </div>
                        <TextInput id="booktitle" name="bookTitle" type="text" placeholder="Book title" defaultValue={bookTitle} required />
                    </div>
                    {/* Author name */}
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorname" value="Author name" />
                        </div>
                        <TextInput id="authorname" name="authorName" type="text" placeholder="Author name" defaultValue={authorName} required />
                    </div>

                </div>
                {/* second row */}
                <div className="flex gap-8">
                    {/* Book image url */}
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookimgurl" value="Book Image URL" />
                        </div>
                        <TextInput id="bookimgurl" name="imageURL" type="text" placeholder="Book Image URL" defaultValue={imageURL} required />
                    </div>
                    {/* Category */}
                    <div className=' lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <select className="w-full rounded-lg" name="category" id="inputState" value={selectbookCategories} onChange={handleChangeSelectdValue}>
                            {
                                bookCategories.map((ele, idx) => {
                                    return <option key={idx} value={ele}>{ele}</option>
                                })
                            }
                        </select>
                    </div>

                </div>
                {/* third row */}

                {/* Book description */}
                <div >
                    <div className="mb-2 block">
                        <Label htmlFor="bookdiscription" value="Book Disciption" />
                    </div>
                    <Textarea id="bookdiscription" name="bookDescription" type="text" placeholder="Type your book disciption" defaultValue={bookDescription} required rows={4} />
                </div>
                {/* Book pdf link */}
                <div className=' lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF Link" />
                    </div>
                    <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Link" defaultValue={bookPDFURL} required />
                </div>

                <div className="flex gap-4">
                    <button className="w-1/5 bg-teal-700 rounded-md py-2 text-white hover:bg-teal-950 transition-all duration-300 font-bold" type='submit'>Edit</button>
                    <button className="w-1/5 bg-red-700 rounded-md py-2 text-white hover:bg-red-950 transition-all duration-300 font-bold" onClick={handleCancelSubmission}>Cancel</button>
                </div>



            </form>
        </div>
    )
}

export default Editbook