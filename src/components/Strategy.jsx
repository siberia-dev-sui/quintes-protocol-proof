import React, { useState } from 'react';
import { Dices, Info } from 'lucide-react';

const Strategy = () => {
    const [hoveredAsset, setHoveredAsset] = useState(null);
    const years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    const assetClasses = ["QNT", "REIT", "Sm Cap", "Lg Cap", "AA", "EM", "HY Bnd", "Intl Stk", "HG Bnd"];

    const renderCell = (label, value, colorClass, baseOpacity = "opacity-50", roundedClass = "", yearIndex) => {
        const isHovered = hoveredAsset === label;
        const opacity = hoveredAsset === null ? baseOpacity : (isHovered ? "opacity-100" : "opacity-30");

        return (
            <div
                className={`flex justify-center cursor-pointer transition-all duration-200 items-center flex-col text-primary-100 w-full sm:w-[58px] h-[58px] ${opacity} ${roundedClass} hover:scale-105`}
                style={{ backgroundColor: colorClass }}
                onMouseEnter={() => setHoveredAsset(label)}
                onMouseLeave={() => setHoveredAsset(null)}
            >
                <p className="text-xs font-medium">{label}</p>
                <p className="text-sm">{value}</p>
            </div>
        );
    };

    // Colors from the HTML style attributes
    const colors = {
        darkTeal: "rgba(20, 74, 90, 0.9)",
        lightBlue: "rgba(93, 204, 232, 0.9)",
        paleBlue: "rgba(163, 230, 244, 0.9)",
        skyBlue: "rgba(59, 191, 226, 0.9)",
        babyBlue: "rgba(128, 217, 238, 0.9)",
        qntBlue: "rgba(51, 170, 202, 0.9)", // QNT color
        teal: "rgba(43, 149, 178, 0.9)",
        darkerTeal: "rgba(35, 128, 154, 0.9)",
        deepTeal: "rgba(28, 107, 130, 0.9)"
    };

    return (
        <div className="py-24 md:py-48">
            <div className="container mx-auto px-8 space-y-8 flex flex-col items-center">
                <div className="space-y-6 flex flex-col items-center">
                    <div className="w-fit text-xs rounded-full px-2.5 py-1 glass-morphism text-primary-200 flex items-center gap-x-2">
                        <Dices size={12} />
                        Strategy
                    </div>
                    <h2 className="font-semibold text-primary-50 text-3xl xl:text-5xl leading-120% tracking-tighter max-w-2xl text-center">
                        Outperforming other asset classes
                    </h2>
                    <p className="leading-relaxed text-primary-100/90 text-base xl:text-lg max-w-2xl text-center">
                        Quintes' high appreciation rates outperform most assets globally.
                    </p>
                </div>

                <div className="w-full sm:w-auto animate-in fade-in-0 duration-1000">
                    <div className="glass-morphism space-y-3 h-fit cursor-pointer p-4 pt-2 rounded-3xl w-full sm:w-auto overflow-x-auto">
                        <div className="flex items-center gap-x-2 pt-2">
                            <p className="font-medium">Annual Asset Class Returns</p>
                            <button><Info size={16} /></button>
                        </div>

                        <div className="flex justify-between sm:justify-start gap-1 min-w-[800px] lg:min-w-0">
                            {years.map((year, yearIndex) => (
                                <div key={year} className="flex-col items-center justify-center font-sans w-full hidden sm:flex">
                                    <h1 className="text-primary-100 py-2 text-sm">{year}</h1>
                                    <div className="w-full space-y-[1px]">
                                        {renderCell("QNT", "33.0%", colors.qntBlue, "opacity-100", yearIndex === 0 ? "rounded-tl-md" : "", yearIndex)}
                                        {renderCell("REIT", "28.0%", colors.skyBlue, "opacity-50", "", yearIndex)}
                                        {renderCell("Sm Cap", "27.2%", colors.babyBlue, "opacity-50", "", yearIndex)}
                                        {renderCell("Lg Cap", "26.5%", colors.teal, "opacity-50", "", yearIndex)}
                                        {renderCell("AA", "24.6%", colors.darkerTeal, "opacity-50", "", yearIndex)}
                                        {renderCell("EM", "18.2%", colors.darkTeal, "opacity-50", "", yearIndex)}
                                        {renderCell("HY Bnd", "15.2%", colors.lightBlue, "opacity-50", "", yearIndex)}
                                        {renderCell("Intl Stk", "8.2%", colors.paleBlue, "opacity-50", "", yearIndex)}
                                        {renderCell("HG Bnd", "5.9%", colors.deepTeal, "opacity-50", yearIndex === 0 ? "rounded-bl-md" : "", yearIndex)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strategy;
