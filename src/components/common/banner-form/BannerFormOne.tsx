"use client";
import { JSX, useEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
/* ================= TAB DATA ================= */
interface TabData {
   title: string;
   icon: JSX.Element;
}
const tab_title: TabData[] = [
   { title: "Tour", icon: <span>✈️</span> },
   { title: "Hotel", icon: <span>🏨</span> },
   { title: "Restaurant", icon: <span>🍽️</span> },
   { title: "Rental", icon: <span>🏠</span> },
   { title: "Activity", icon: <span>🎯</span> },
   { title: "Car Rental", icon: <span>🚗</span> },
];
interface GuestType {
   id: number;
   title: string;
   count: number;
}
const guest_data: GuestType[] = [
   { id: 1, title: "Rooms", count: 0 },
   { id: 2, title: "Adults", count: 0 },
   { id: 3, title: "Children", count: 0 },
];
const BannerFormOne = () => {
   const [activeTab, setActiveTab] = useState(0);
   /* ====== FORM STATES ====== */
   const [location, setLocation] = useState(false);
   const [guest, setGuest] = useState(false);
   const [checkInDate, setCheckInDate] = useState<Date | Date[]>(new Date());
   const [checkOutDate, setCheckOutDate] = useState<Date | Date[]>(new Date());
   const [guestCounts, setGuestCounts] = useState<GuestType[]>(guest_data);
   const locationRef = useRef<HTMLDivElement>(null);
   const guestRef = useRef<HTMLDivElement>(null);
   /* ====== OUTSIDE CLICK CLOSE ====== */
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
            setLocation(false);
         }
         if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
            setGuest(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);
   const handleIncrement = (id: number) => {
      setGuestCounts(prev =>
         prev.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
         )
      );
   };
   const handleDecrement = (id: number) => {
      setGuestCounts(prev =>
         prev.map(item =>
            item.id === id && item.count > 0
               ? { ...item, count: item.count - 1 }
               : item
         )
      );
   };
   return (
      <div className="tg-booking-form-area tg-booking-form-space pb-105">
         <div className="container">
            <div className="tg-booking-form-wrap">
               {/* ================= TABS ================= */}
               <div className="nav nav-tab justify-content-center">
                  {tab_title.map((tab, index) => (
                     <button
                        key={index}
                        className={`nav-link ${activeTab === index ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                     >
                        {tab.icon} {tab.title}
                     </button>
                  ))}
               </div>
               {/* ================= FORM ================= */}
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="tg-booking-form-input-group d-flex align-items-end justify-content-between">
                     {/* Location */}
                     <div ref={locationRef}>
                        <span>Destination</span>
                        <div onClick={() => setLocation(!location)}>
                           Where are you going...
                        </div>
                        {location && (
                           <ul>
                              <li>Chicago</li>
                              <li>London</li>
                              <li>Dubai</li>
                           </ul>
                        )}
                     </div>
                     {/* Check In */}
                     <div>
                        <span>Check In</span>
                        <Flatpickr
                           value={checkInDate}
                           onChange={(dates) => setCheckInDate(dates)}
                           options={{ dateFormat: "d/m/Y", minDate: "today" }}
                        />
                     </div>
                     {/* Check Out */}
                     <div>
                        <span>Check Out</span>
                        <Flatpickr
                           value={checkOutDate}
                           onChange={(dates) => setCheckOutDate(dates)}
                           options={{ dateFormat: "d/m/Y", minDate: "today" }}
                        />
                     </div>
                     {/* Guests */}
                     <div ref={guestRef}>
                        <span>Guests</span>
                        <div onClick={() => setGuest(!guest)}>+ Add Guests</div>
                        {guest && (
                           <ul>
                              {guestCounts.map(item => (
                                 <li key={item.id}>
                                    {item.title}
                                    <button type="button" onClick={() => handleIncrement(item.id)}>+</button>
                                    {item.count}
                                    <button type="button" onClick={() => handleDecrement(item.id)}>-</button>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                     {/* Search */}
                     <button type="submit">Search</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};
export default BannerFormOne;
