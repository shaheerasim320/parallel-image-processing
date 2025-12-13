import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-24 max-w-7xl mx-auto w-full">

            {/* 404 Heading */}
            <h1 className="text-[150px] leading-none font-black text-[#3b82f6] tracking-tighter select-none">
                404
            </h1>

            {/* Error Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight text-center">
                Page Not Found
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 text-center max-w-2xl mb-10 leading-relaxed">
                It looks like this thread got lost in execution. The page you are looking for doesn't exist or has been moved to another process.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/" className="w-full bg-[#3b82f6] hover:bg-[#0d59d4] transition-all text-white rounded-xl flex justify-center items-center sm:w-auto !py-3 !px-8 text-base">
                    <span className="material-symbols-outlined mr-2 text-[20px]">home</span>
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound;