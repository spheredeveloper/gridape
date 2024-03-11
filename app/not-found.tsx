import { Back, Previous } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"

const notFound = () => {
    return (
        <div className="min-h-screen text-center relative py-5 flex items-center justify-center">
            <div className="container mx-auto">
                <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-20">
                    <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 item-center">
                        <div className="md:col-span-1">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Oops! You&apos;re on the wrong place.</h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-5">
                                Unable to find what you&apos;re looking for? Begin your journey from our Homepage.
                            </p>
                            <Link href="/" className="btn-sm mb-10 bg-[#2E3192] text-white whitespace-nowrap  ">
                                <Back size={20} /> Back to home
                            </Link>
                        </div>
                        <div className="md:col-span-1 mt-8 md:mt-0">
                            <Image
                                width={640}
                                height={417}
                                src="/svg/ils_06.svg"
                                alt="404 Image"
                                className="m-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Image
                width={1915}
                height={674}
                src="/svg/shape_178.svg"
                alt="shape"
                className="shapes shape-one w-100 absolute -z-[1] bottom-0 right-0"
            />
        </div>
    )
}

export default notFound