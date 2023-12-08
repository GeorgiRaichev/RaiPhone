import '../Error/error.css'

export default function Error() {
    return (
        <>
            <div className="er">
                <title>Page Not Found</title>
                <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" />
                <h1 className="error-text">
                    Whoops, We can't seem to find the resource you're looking for.
                </h1>
                <p className="text">
                    Please check that the Web site address is spelled correctly.
                </p>
                <div className="buutn1">
                    <a
                        className="error"
                        href="/"
                    >
                        Go to Homepage
                    </a>
                </div>
            </div>
        </>
    )
}