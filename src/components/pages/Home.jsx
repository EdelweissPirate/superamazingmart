import { useEffect } from "react"

function Home({ categories, handleTransition, handleFocus }) {
    useEffect(() => {
        handleTransition(true)
    
        return () => {
            handleTransition(false)
        }
    }, [])

    const onHover = (i) => {
        handleFocus(i)
    }

    const generateCategories = () => {
        const _cats = categories.map((item, i) => {
            return <button onMouseEnter={() => onHover(i)} onMouseLeave={() => onHover(false)} key={item + i} className="hover-button home-menu-category flex flex-center border round-corners">{item}</button>
        })

        return [..._cats]
    }

    return (
        <section id="home">
            <div className="home-menu slide-in h-fill flex flex-center col p-4" >
                <h2 className="spacer">Please select a category</h2>
                <div className="round-corners border grid home-menu-inner p-1 w-fill">
                    {generateCategories()}
                </div>
            </div>
        </section>
    )
}

export default Home