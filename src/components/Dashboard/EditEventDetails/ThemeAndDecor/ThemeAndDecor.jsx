import './ThemeAndDecor.scss';

const ThemeAndDecor = () => {
    return (
        <div>
            <h2>Edit Theme & Decor</h2>
            <p>Ideas: https://meetings.skift.com/100-event-theme-ideas/</p>

            <form className="content-box">
                <label className='themeAndDecor-info-box'>
                    Theme: 
                    <input
                        className='input-box'
                        type='text'
                        name='eventTheme'
                        value=''
                    />
                </label>
                <label className='themeAndDecor-info-box'>
                    Decor: 
                    <input
                        className='input-box'
                        type='text'
                        name='eventTheme'
                        value=''
                    />
                </label>
            </form>

            <div className='btn-container'>
                <button className="save-btn">Save</button>
            </div>
        </div>
    )
};

export default ThemeAndDecor;