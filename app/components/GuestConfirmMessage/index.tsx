"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OnePage from "@/components/OnePage";
import Image from "next/image";
import toraja from "@/public/patangkerapa_toraja.webp";
import logo from "@/public/logo.png";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGetGuestsByClient, usePostGuest } from "@/hooks/useInvitation";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

const MAX_MESSAGE_LENGTH = 300;

const GuestConfirmationMessage: React.FC = () => {
  const searchParams = useSearchParams();
  const initialGuestName = searchParams.get("to") || "";

  const [guestName, setGuestName] = useState(initialGuestName);
  const [guestMessage, setGuestMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false); 

  const [postErrorMessage, setPostErrorMessage] = useState<string | null>(null);
  const [postSuccessMessage, setPostSuccessMessage] = useState<string | null>(
    null
  );

  const { guests, loading, error } = useGetGuestsByClient(
    clientId as string,
    shouldRefetch
  );
  const {
    postGuest,
    loading: posting,
    error: postError,
    success,
  } = usePostGuest();

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Refetch guests automatically after the first successful submission
  useEffect(() => {
    if (postError || success) {
      if (postError) {
        setPostErrorMessage(postError);
      }
      if (success) {
        setPostSuccessMessage("Ucapan berhasil dikirim!");

        // If this is the first successful submission, set flag and trigger refetch
        if (!hasSubmittedOnce) {
          setHasSubmittedOnce(true);
          setShouldRefetch(true); // Trigger refetch
        }

        // Clear form inputs after successful submission
        setGuestName("");
        setGuestMessage("");
        setConfirmation("");
      }

      const timer = setTimeout(() => {
        setPostErrorMessage(null);
        setPostSuccessMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [postError, success, hasSubmittedOnce]);

  const handleSubmit = async () => {
    if (!guestName || !guestMessage || !confirmation) {
      setPostErrorMessage("Nama, ucapan, dan konfirmasi kehadiran wajib diisi.");
      return;
    }

    setPostErrorMessage(null);

    if (guestMessage.length > MAX_MESSAGE_LENGTH) return;

    const guestData = {
      Name: guestName,
      Message: guestMessage,
      Confirmation: confirmation,
      client_id: clientId as string,
    };

    await postGuest(guestData);

    if (success) {
      setShouldRefetch(!shouldRefetch); // Toggle refetch state after successful post
    }
  };

  const handleGuestMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
      setGuestMessage(e.target.value);
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  return (
    <>
      <OnePage
        className="w-full z-20 h-auto relative flex-col !items-start"
        id="guest-confirmation-msg"
      >
        <div className="bg-black opacity-30 absolute top-0 w-screen min-h-full h-auto z-0"></div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariants}
          className="w-full z-20 h-auto relative flex-col !items-start justify-between "
        >
          <div className="w-full flex flex-col items-start justify-between text-white gap-10 z-10 bottom-0">
            <div className="w-full flex flex-col items-center font-poppins text-[11px] p-5">
              <div className="w-full max-w-[540px] p-3 bg-gradient-to-b from-[#8E8077] to-[#A69A92] border border-white overflow-x-hidden">
                <div className="text-center">
                  <h1 className="font-caramel text-[46px] leading-none">
                    Wishes
                  </h1>
                  <p>Ucapan, Doa & Konfirmasi Kehadiran</p>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <div>
                    <label htmlFor="nama" className="block mb-2">
                      Nama
                    </label>
                    <input
                      id="nama"
                      name="nama"
                      className="w-full p-2 border border-white bg-transparent text-white placeholder-gray-200 outline-none capitalize"
                      placeholder="Nama anda..."
                      value={guestName}
                      onChange={(e) => {
                        if (e.target.value.length <= 60) {
                          setGuestName(e.target.value);
                        }
                      }}
                      // Make input readonly if guestName is provided via URL
                      readOnly={!!initialGuestName}
                    />
                  </div>
                  <div>
                    <label htmlFor="ucapan" className="block mb-2 capitalize">
                      Ucapan dari {guestName || "Tamu"}
                    </label>
                    <textarea
                      id="ucapan"
                      name="ucapan"
                      rows={2}
                      className="w-full p-2 border border-white bg-transparent text-white placeholder-gray-200 outline-none"
                      placeholder="Tuliskan ucapan atau doa..."
                      value={guestMessage}
                      onChange={handleGuestMessageChange}
                    ></textarea>
                    <p className="text-right text-xs text-gray-200">
                      {guestMessage.length}/{MAX_MESSAGE_LENGTH} characters
                    </p>
                    {guestMessage.length >= MAX_MESSAGE_LENGTH && (
                      <p className="text-red-600 text-xs">
                        Ucapan tidak boleh lebih dari {MAX_MESSAGE_LENGTH}{" "}
                        karakter.
                      </p>
                    )}
                  </div>
                  <fieldset className="mt-4">
                    <legend className="mb-2">Konfirmasi Kehadiran:</legend>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="hadir"
                          name="kehadiran"
                          value="hadir"
                          className="mr-2"
                          onChange={() => setConfirmation("Hadir")}
                        />
                        <label htmlFor="hadir">Hadir</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="tidak-hadir"
                          name="kehadiran"
                          value="tidak-hadir"
                          className="mr-2"
                          onChange={() => setConfirmation("Tidak Hadir")}
                        />
                        <label htmlFor="tidak-hadir">Tidak Hadir</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="ragu-ragu"
                          name="kehadiran"
                          value="ragu-ragu"
                          className="mr-2"
                          onChange={() => setConfirmation("Ragu-ragu")}
                        />
                        <label htmlFor="ragu-ragu">Ragu-ragu</label>
                      </div>
                    </div>
                  </fieldset>
                  <button
                    className="mt-3 bg-brown-gradient py-1 px-5 w-fit rounded-full border border-white self-center text-xs"
                    onClick={handleSubmit}
                    disabled={
                      posting || guestMessage.length > MAX_MESSAGE_LENGTH
                    }
                  >
                    {posting ? "Mengirim..." : "Kirim Sekarang"}
                  </button>

                  {postErrorMessage && (
                    <p className="text-red-800 mt-2 text-center">
                      {postErrorMessage}
                    </p>
                  )}
                  {postSuccessMessage && (
                    <p className="text-green-800 mt-2 text-center">
                      {postSuccessMessage}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-3 w-full max-w-[540px] h-full max-h-[230px] overflow-x-hidden overflow-y-scroll bg-browny bg-opacity-90 border border-white guest-confirmation">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p className="text-red-500">Error loading messages.</p>
                ) : !guests || guests.length === 0 ? (
                  <p className="text-gray-200">No guests to display.</p>
                ) : (
                  <ul>
                    {guests.map((guest, index) => {
                      const getInitials = (name: string) => {
                        const nameParts = name.split(" ");
                        const initials = nameParts
                          .map((part) => part.charAt(0).toUpperCase())
                          .join("");
                        return initials;
                      };

                      return (
                        <li
                          key={index}
                          className="py-3 border-b border-white last:border-transparent flex gap-2"
                        >
                          <div className="bg-white text-darkBrowny border border-darkBrowny p-2 h-[30px] w-[30px] rounded-full font-bold relative flex items-center justify-center">
                            <p className="absolute ">{getInitials(guest.Name)}</p>
                          </div>
                          <div>
                            <strong className="pb-2 text-sm">
                              {guest.Name}
                            </strong>
                            <p>{guest.Message}</p>
                            <p className="text-[10px] text-gray-200">
                              {guest.Confirmation}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center w-full text-center gap-5 font-caramel text-[32px] leading-none">
              <h2 className="text-[46px]">See you on our happy day!</h2>
              <Image
                src={toraja}
                alt="Image of toraja couple"
                className="w-[54px]"
              />
              <p>
                With love, <br /> Evelyn & Benhard
              </p>
               <p className="font-Italianno text-2xl">
                Crafting memories, design your dream
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#8E8077] to-[#A69A92] w-full h-auto flex items-center justify-center rounded-t-xl gap-2 py-1 self-end text-white z-20">
              <Image
                src={logo}
                alt="Image of toraja couple"
                className="w-[30px]"
              />
              <p className="font-poppins text-xs font-semibold">
                2024 &copy; Deili Invitation, All right reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </OnePage>
    </>
  );
};

export default GuestConfirmationMessage;