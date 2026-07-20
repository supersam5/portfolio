import React from "react";
import { motion } from "framer-motion";

const MeetSamuel: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-5xl px-4"
        >
            <div className="grid items-center gap-10 md:grid-cols-2">
                {/* Portrait slot.
                    TODO: once you add a photo to /public (e.g. /samuel.jpg),
                    replace this placeholder block with:
                    <Image src="/samuel.jpg" width={224} height={224} alt="Samuel Egemba"
                           className="aspect-square w-56 rounded-full object-cover ..." /> */}
                <div className="flex justify-center md:justify-start">
                    <div
                        aria-label="Portrait placeholder"
                        className="flex aspect-square w-56 items-center justify-center rounded-full border-4 border-orange-500/60 bg-white/5 text-6xl font-bold text-orange-500 shadow-[0_0_24px_rgba(249,115,22,0.25)]"
                    >
                        SE
                    </div>
                </div>

                {/* Bio */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-orange-500 sm:text-4xl">
                        Meet Samuel
                    </h2>
                    <div className="mt-6 space-y-4 text-gray-200">
                        <p>
                            [Replace with your extended bio — who you are, what you build,
                            and what drives you. ~2–3 short paragraphs.]
                        </p>
                        <p>
                            [Second paragraph: your background, current focus, and the
                            technologies and domains you care about.]
                        </p>
                        <p>
                            [Third paragraph: what you&apos;re looking to do next, or a line
                            about how you like to work.]
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MeetSamuel;