import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { getCategory, updateCategory } from '../../api/category.api';
import { CategoryI } from '../../types/category.type';
import useToastContextProvider from '../../providers/useToastContextProvider';
import Alert from '../../components/toasts/Alert';
import { ContactI } from '../../types/contact.type';
import { createContact, deleteContact } from '../../api/contact.api';

type Params = {
  id: string;
};

type SaveContactI = Omit<ContactI, '_id'>;

const Category = () => {
  const { id } = useParams<Params>();
  const [category, setCategory] = useState<CategoryI>({} as CategoryI);
  const [contact, setContact] = useState<SaveContactI>({} as SaveContactI);
  const { setError, setSuccess } = useToastContextProvider();

  useEffect(() => {
    const fetchCategory = async () => {
      if (id) {
        const fetchedCategory = await getCategory(id);

        if (!fetchCategory) {
          return setError('Something went wrong!');
        }

        setCategory(fetchedCategory);
      }
    };

    fetchCategory();
  }, []);

  const handleCategorySubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!category || !id) return setError('Category cannot be empty!');

    try {
      const updatedCategory = await updateCategory(id, category.name);

      if (!isEmpty(updatedCategory)) {
        setSuccess('Category has been updated.');
        setCategory(updatedCategory);
        return;
      }

      setError('Something went wrong');
    } catch (error) {
      setError('Something went wrong');
      console.log(error);
    }
  };

  const handleContactSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (isEmpty(contact) || !id) return setError('Contact cannot be empty!');

    try {
      const response = await createContact(id, contact);
      const createdContact = await response.json();

      if (!isEmpty(createdContact)) {
        setSuccess('Contact has been created.');
        setCategory(createdContact);
        setContact({ name: '', description: '', number: '' });
        return;
      }

      setError('Something went wrong');
    } catch (error) {
      setError('Something went wrong');
      console.log(error);
    }
  };

  const handleDelete = async (
    categoryId: string,
    contactId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const updatedCategory = await deleteContact(categoryId, contactId);

    if (isEmpty(updatedCategory)) return setError('Something went wrong!');

    setSuccess('Contacts has been deleted.');
    setCategory(updatedCategory);
  };

  return (
    <div className="mt-10">
      <form
        className=" flex justify-between mt-10"
        onSubmit={handleCategorySubmit}
      >
        <input
          type="text"
          value={category?.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCategory({ ...category!, name: e.target.value })
          }
          placeholder="Add Category"
          className="input input-bordered w-full flex-1 mr-5"
        />
        <button className="btn btn-primary rounded-lg" type="submit">
          Update Category
        </button>
      </form>
      <form onSubmit={handleContactSubmit}>
        <div className=" flex justify-between mt-10">
          <input
            type="text"
            value={contact?.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setContact({ ...contact!, name: e.target.value })
            }
            placeholder="Add Name"
            className="input input-bordered w-full flex-1 mr-5"
          />
          <input
            type="text"
            value={contact?.number}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setContact({ ...contact!, number: e.target.value })
            }
            placeholder="Add Number"
            className="input input-bordered w-full flex-1 mr-5"
          />
          <button className="btn btn-primary rounded-lg" type="submit">
            Add Contact
          </button>
        </div>
        <input
          type="text"
          value={contact?.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setContact({ ...contact!, description: e.target.value })
          }
          placeholder="Add Description"
          className="input input-bordered w-full flex-1 mr-5 mt-4"
        />
      </form>
      <h2 className="text-2xl mt-10 mb-5">Contacts</h2>
      {category ? (
        <div className="flex flex-wrap  gap-6">
          {category.contacts?.length > 0 ? (
            category.contacts.map((contact) => (
              <div className="card w-full border border-gray-600 rounded-lg">
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="card-title">{contact.name}</h2>
                      <h2 className="text-gray-500">{contact.description}</h2>
                      <h2 className="text-gray-500">{contact.number}</h2>
                    </div>

                    <button
                      className="btn btn-primary px-5 bg-error hover:bg-red-500 border-red-400 hover:border-red-500 focus:outline-red-400"
                      onClick={(e) => handleDelete(id!, contact._id, e)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Alert message="No contacts available." />
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Category;
