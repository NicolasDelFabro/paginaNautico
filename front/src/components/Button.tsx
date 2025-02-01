import Link from "next/link";

export const Button = () => {
    return(
        <>
            <Link href="/#" className="px-2 py-3 bg-red-900 rounded-sm">
                <button>
                    VER MÁS
                </button>
            </Link>
        </>
    )
}