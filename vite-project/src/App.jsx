import React, { useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/reset.css';
import './index.css';
import { Input } from 'antd';

function App() {
  // Предположим, мы хотим загрузить данные пользователя
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Пример URL, замените его на ваш реальный URL API
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Этот эффект будет вызван один раз при монтировании компонента

  return (
    <div style={{ marginTop: '50px', padding: '20px', fontFamily: 'Inter, Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Анкета для трудоустройства</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <p>Пользователь: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}

      {/* Таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Личная информация</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Если вы сменили фамилию, укажите, пожалуйста, прежнюю</th>
              <th style={{ padding: '10px' }}><Input 
              placeholder='Введите фамилию'
              type='text'
              ></Input></th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Число, месяц и год рождения, место рождения</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Национальность</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Гражданство</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Паспорт, удостоверение</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Укажите, пожалуйста, номера телефонов, по которым с Вами можно связаться</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Домашний телефон</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Мобильный телефон</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Контактный телефон, ФИО, степень родства</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>e-mail</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Ник в телеграме</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
          </tbody>
        </table>
        <h2>Место жительство</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Адрес постоянной регистрации</th>
              <th style={{ padding: '10px' }}><Input
              type="text" /></th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Адрес фактического проживания</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Город</td>
              <td style={{ padding: '10px' }}>Алматы</td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Область</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Район</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Улица</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Дом</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            
          </tbody>
        </table>
        <h2>Образование</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Дата начала и окончания обучения</th>
              <th style={{ padding: '10px' }}><Input
              type="text" /></th>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Полное название учебного заведения</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Специальность, форма обучения</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Квалификация</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            
            
          </tbody>
        </table>
        <h2>Прошлые места работы</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Период работы</th>
              <th style={{ padding: '10px' }}><Input
              type="text" /></th>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Полное название организации</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Наименования должности</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>ФИО руководителя, телефон</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Причина увольнения</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            
            
          </tbody>
        </table>
        <h2>Укажите не менее 3 лиц, которые могут дать Вам профессиональную рекомендацию</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>ФИО</th>
              <th style={{ padding: '10px' }}>Место работы, должность</th>
              <th style={{ padding: '10px' }}>Телефон</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
            <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            
            
          </tbody>
        </table>


        
      </section>
      {/* Вторая таблица с динамическими данными */}
      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Семейное положение</h2>
        
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>ФИО</th>
              <th style={{ padding: '10px' }}>Место работы</th>
              <th style={{ padding: '10px' }}>Должность</th>
              <th style={{ padding: '10px' }}>Адрес места жительства</th>
              <th style={{ padding: '10px' }}>Гражданство</th>
              <th style={{ padding: '10px' }}>Контакты</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>  
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
            <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>



          </tbody>
        </table>
        


      </section>
      
      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Дети</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>ФИО</th>
              <th style={{ padding: '10px' }}>Дата рождения</th>
              <th style={{ padding: '10px' }}>Телефон</th>
              <th style={{ padding: '10px' }}>Адрес места учебы, работы</th>
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>



          </tbody>
        </table>

        
        

        
      </section>
      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Ближайшие родственники</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Степень родства</th>
              <th style={{ padding: '10px' }}>ФИО</th>
              <th style={{ padding: '10px' }}>Дата рождения</th>
              <th style={{ padding: '10px' }}>Место работы. должность</th>
              <th style={{ padding: '10px' }}>Домашний адрес, номер телефона</th>
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>



          </tbody>
        </table>

        
        

        
      </section>
      
      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Ближайшие родственники</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Степень родства</th>
              <th style={{ padding: '10px' }}>ФИО</th>
              <th style={{ padding: '10px' }}>Дата рождения</th>
              <th style={{ padding: '10px' }}>Место работы. должность</th>
              <th style={{ padding: '10px' }}>Домашний адрес, номер телефона</th>
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>



          </tbody>
        </table>
        
      </section>
      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Ближайшие родственники</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Являетесь ли Вы руководителем/учредителем (соучредителем), членом совета директоров и/или правления коммерческих организаций (ИП/ТОО)</th>
              <th style={{ padding: '10px' }}>Наименование, ИНН, адрес, вид деятельности, телефон</th>
              <th style={{ padding: '10px' }}>Дата рождения</th>
              <th style={{ padding: '10px' }}>Место работы. должность</th>
              <th style={{ padding: '10px' }}>Домашний адрес, номер телефона</th>
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>



          </tbody>
        </table>
        
      </section>

      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Дополнительная информация</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Являетесь ли Вы руководителем/учредителем (соучредителем), членом совета директоров и/или правления коммерческих организаций (ИП/ТОО)</th>
              <th style={{ padding: '10px' }}>ФИО</th>
              <th style={{ padding: '10px' }}>Дата рождения</th>
              <th style={{ padding: '10px' }}>Место работы. должность</th>
              <th style={{ padding: '10px' }}>Домашний адрес, номер телефона</th>
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}>Имеете ли Вы родственников, членов семьи, работающих в Банке или связанных с деятельностью  Банка</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Степень родства</td>
              <td style={{ padding: '10px' }}>ФИО</td>
              <td style={{ padding: '10px' }}>Подразделение,должность</td>
              
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
              
            </tr>



          </tbody>
        </table>
        
      </section>
      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Наличие автомобиля</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Имеется ли у вас автомобиль?</th>
              <th style={{ padding: '10px' }}><Input
              type="text" /></th>
              
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}>Модель</td>
              <td style={{ padding: '10px' }}>Год выпуска</td>
              <td style={{ padding: '10px' }}>Гос. номер</td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>1. <Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>2. <Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
              
              
              
            </tr>



          </tbody>
        </table>
        
      </section>

      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Прочее</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Напишите статус военнообязанного</th>
              <th style={{ padding: '10px' }}><Input
              type="text" /></th>
              
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}>Имеете ли Вы право на льготы согласно действующему законодательству?</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
             
              
              
            </tr>
            



          </tbody>
        </table>
        
      </section>

      {/* Динамическая таблица */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Внимательно прочитайте и ответьте, пожалуйста, на следующие вопросы</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Имеете ли Вы просроченный заем?</th>
              <th style={{ padding: '10px' }}><Input
              type="text" /></th>
              
              
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td style={{ padding: '10px' }}>Привлекались ли Вы к уголовной ответственности?</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
             
              
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Привлекались ли Ваши близкие родственники, члены семьи  к уголовной ответственности?</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
             
              
            </tr>

            <tr>
              <td style={{ padding: '10px' }}>Против Вас когда-либо возбуждалось уголовное дело?</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
             
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Выплачиваете ли Вы алименты?</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
             
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Привлекались ли Вы к административной ответственности?</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
             
              
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Есть ли у Вас дополнительный доход (работа, дистрибьютерство/представительство в торговых компаниях)</td>
              <td style={{ padding: '10px' }}><Input
              type="text" /></td>
             
              
            </tr>



          </tbody>
        </table>
        
      </section>
    </div>
  );
}

export default App;


