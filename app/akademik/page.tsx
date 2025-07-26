"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  DollarSign,
  FileText,
  BookOpen,
  Target,
  Pin,
  CheckCircle,
  Loader2,
  Users,
  TrendingUp,
  Building,
  School,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const AnimatedSection = motion.section;

interface ProgramStudi {
  id: string;
  nama: string;
  fakultas: string;
  jenjang: string;
  akreditasi: string;
  biayaSemester: number;
}

interface FacultyWithPrograms {
  id: string;
  nama: string;
  namaLengkap: string;
  akreditasi: string;
  programs: ProgramStudi[];
  programsLoaded: boolean;
  programsLoading: boolean;
  description: string;
  icon: LucideIcon;
}

export default function AkademikPage() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Data fakultas statis dengan tema konsisten
  const staticFaculties = [
    {
      id: "1",
      nama: "FHISP",
      namaLengkap: "Fakultas Hukum, Ilmu Sosial dan Politik",
      akreditasi: "A",
      description:
        "Fakultas yang mengembangkan ilmu sosial dan politik untuk membangun masyarakat yang demokratis dan berkeadilan.",
      icon: Users,
    },
    {
      id: "2",
      nama: "FKIP",
      namaLengkap: "Fakultas Keguruan dan Ilmu Pendidikan",
      akreditasi: "A",
      description:
        "Fakultas yang mencetak tenaga pendidik profesional untuk berbagai jenjang pendidikan.",
      icon: School,
    },
    {
      id: "3",
      nama: "FST",
      namaLengkap: "Fakultas Sains dan Teknologi",
      akreditasi: "A",
      description:
        "Fakultas yang mengembangkan ilmu pengetahuan alam dan matematika untuk kemajuan teknologi.",
      icon: Target,
    },
    {
      id: "4",
      nama: "FEB",
      namaLengkap: "Fakultas Ekonomi dan Bisnis",
      akreditasi: "A",
      description:
        "Fakultas yang mengembangkan ilmu ekonomi dan bisnis untuk pembangunan ekonomi nasional.",
      icon: TrendingUp,
    },
    {
      id: "5",
      nama: "SPs",
      namaLengkap: "Sekolah Pascasarjana",
      akreditasi: "A",
      description:
        "Unit penyelenggara program Magister (S2) dan Doktor (S3) Universitas Terbuka dengan sistem pembelajaran jarak jauh yang fleksibel dan berkualitas.",
      icon: Building,
    },
  ];

  const [faculties, setFaculties] = useState<FacultyWithPrograms[]>(
    staticFaculties.map((faculty) => ({
      ...faculty,
      programs: [],
      programsLoaded: false,
      programsLoading: false,
    }))
  );

  // Function untuk fetch program studi ketika card ditekan
  const fetchProgramStudi = async (
    fakultasNama: string,
    fakultasId: string
  ) => {
    // Set loading state untuk fakultas ini
    setFaculties((prev) =>
      prev.map((faculty) =>
        faculty.id === fakultasId
          ? { ...faculty, programsLoading: true }
          : faculty
      )
    );

    try {
      const response = await fetch(
        `/api/program-studi?fakultas=${fakultasNama}`
      );
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to fetch program studi");
      }



      // Update fakultas dengan program studi
      setFaculties((prev) =>
        prev.map((faculty) =>
          faculty.id === fakultasId
            ? {
              ...faculty,
              programs: result.data || [],
              programsLoaded: true,
              programsLoading: false,
            }
            : faculty
        )
      );
    } catch (error) {
      console.error("❌ Error fetching program studi:", error);

      // Reset loading state on error
      setFaculties((prev) =>
        prev.map((faculty) =>
          faculty.id === fakultasId
            ? { ...faculty, programsLoading: false }
            : faculty
        )
      );

      toast({
        title: "Error",
        description: `Gagal memuat program studi untuk ${fakultasNama}`,
        variant: "destructive",
      });
    }
  };

  const requirements = [
    "Lulusan SMA/SMK/MA/Paket C atau sederajat untuk jenjang S1",
    "Lulusan D1/D2/D3 atau sederajat untuk jenjang S1 (dengan penyetaraan)",
    "Memiliki Nomor Induk Siswa Nasional (NISN)",
    "Memiliki Kartu Tanda Penduduk (KTP) yang masih berlaku",
    "Memiliki ijazah dan transkrip nilai yang telah dilegalisir",
    "Pas foto terbaru ukuran 3x4 cm (background merah)",
    "Tidak ada batasan usia untuk mendaftar",
    "Mampu mengoperasikan komputer dan internet dasar",
  ];

  const feeStructure = [
    {
      level: "S1",
      registration: "Rp 150.000",
      semester: "Rp 1.300.000 - Rp 1.800.000",
      note: "Tergantung jumlah SKS yang diambil",
    },
    {
      level: "D3",
      registration: "Rp 150.000",
      semester: "Rp 1.000.000 - Rp 1.400.000",
      note: "Tergantung jumlah SKS yang diambil",
    },
    {
      level: "S2",
      registration: "Rp 200.000",
      semester: "Rp 2.000.000 - Rp 2.500.000",
      note: "Tergantung program studi",
    },
  ];

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navbar />

      {/* Enhanced Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-slate-800">Jelajahi Program</span>
            <br />
            <span className="text-[#002F86] relative">
              Akademik Terbaik
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-2 bg-[#FFD700] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Temukan berbagai fakultas dan program studi berkualitas yang
            tersedia di{" "}
            <span className="font-bold text-[#002F86]">
              Universitas Terbuka
            </span>{" "}
            untuk masa depan karier yang cemerlang
          </motion.p>
        </div>
      </div>

      {/* Faculties Section */}
      <AnimatedSection
        className="py-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Fakultas & <span className="text-[#002F86]">Program Studi</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Klik pada fakultas untuk melihat program studi yang tersedia
              </p>
            </motion.div>

            <Accordion
              type="single"
              collapsible
              className="space-y-6"
              onValueChange={(value) => {
                if (value) {
                  const faculty = faculties.find((f) => f.id === value);
                  if (
                    faculty &&
                    !faculty.programsLoaded &&
                    !faculty.programsLoading
                  ) {
                    fetchProgramStudi(faculty.nama, faculty.id);
                  }
                }
              }}
            >
              {faculties.map((faculty, index) => (
                <motion.div
                  key={faculty.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={faculty.id}
                    className="border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-6">
                          <motion.div
                            className="w-16 h-16 bg-[#002F86] rounded-2xl flex items-center justify-center shadow-lg"
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              backgroundColor: "#FFD700",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <faculty.icon className="w-8 h-8 text-white transition-colors duration-300" />
                          </motion.div>
                          <div className="text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#002F86] group-hover:text-[#001F66] transition-colors duration-300">
                              {faculty.nama}
                            </h3>
                            <p className="text-slate-700 font-semibold text-base md:text-lg">
                              {faculty.namaLengkap}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge
                            className={cn(
                              "px-4 py-2 font-bold shadow-lg transition-all duration-300",
                              faculty.akreditasi === "A"
                                ? "bg-[#FFD700] text-[#002F86] hover:bg-[#E6C200]"
                                : "bg-slate-500 text-white"
                            )}
                          >
                            Akreditasi {faculty.akreditasi}
                          </Badge>
                          <motion.div
                            className="w-12 h-12 bg-[#002F86] rounded-xl flex items-center justify-center shadow-lg"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#FFD700",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <BookOpen className="w-6 h-6 text-white transition-colors duration-300" />
                          </motion.div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8">
                      <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <p className="text-slate-700 text-lg leading-relaxed font-medium">
                            {faculty.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-2xl text-[#002F86] mb-6 flex items-center">
                            <Target className="w-6 h-6 mr-3" />
                            Program Studi Tersedia:
                          </h4>

                          {faculty.programsLoading ? (
                            <motion.div
                              className="flex items-center justify-center py-12"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="text-center">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                  }}
                                >
                                  <Loader2 className="h-8 w-8 text-[#002F86] mx-auto mb-4" />
                                </motion.div>
                                <p className="text-slate-600 font-medium">
                                  Memuat program studi...
                                </p>
                              </div>
                            </motion.div>
                          ) : faculty.programs.length === 0 &&
                            faculty.programsLoaded ? (
                            <div className="text-center py-8">
                              <p className="text-slate-500 font-medium">
                                Belum ada program studi yang tersedia untuk
                                fakultas ini.
                              </p>
                            </div>
                          ) : faculty.programs.length === 0 ? (
                            <motion.div
                              className="text-center py-8 bg-blue-50 rounded-xl border-2 border-dashed border-[#002F86]/30"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <BookOpen className="h-12 w-12 text-[#002F86] mx-auto mb-4" />
                              <p className="text-[#002F86] font-semibold">
                                Klik untuk memuat program studi...
                              </p>
                            </motion.div>
                          ) : (
                            <motion.div
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.5,
                                staggerChildren: 0.1,
                              }}
                            >
                              {faculty.programs.map((program, programIndex) => (
                                <motion.div
                                  key={program.id}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: programIndex * 0.05,
                                  }}
                                >
                                  <Card className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white group">
                                    <CardContent className="p-6">
                                      <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                          <h5 className="font-bold text-[#002F86] text-lg mb-2 group-hover:text-[#001F66] transition-colors duration-300">
                                            {program.nama}
                                          </h5>
                                          <div className="space-y-1">
                                            <p className="text-slate-700 font-semibold">
                                              Jenjang {program.jenjang}
                                            </p>
                                            <p className="text-sm text-slate-600 font-medium">
                                              Biaya:{" "}
                                              {formatCurrency(
                                                program.biayaSemester
                                              )}
                                              /semester
                                            </p>
                                          </div>
                                        </div>
                                        <Badge
                                          className={cn(
                                            "ml-4 px-3 py-1 font-bold transition-all duration-300",
                                            program.akreditasi === "A"
                                              ? "bg-[#FFD700] text-[#002F86] hover:bg-[#E6C200]"
                                              : program.akreditasi === "B"
                                                ? "bg-slate-500 text-white"
                                                : "bg-slate-400 text-white"
                                          )}
                                        >
                                          {program.akreditasi === "-"
                                            ? "Baru"
                                            : program.akreditasi}
                                        </Badge>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      {/* Requirements Section */}
      <AnimatedSection
        className="py-24 bg-slate-50 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Persyaratan <span className="text-[#002F86]">Pendaftaran</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Dokumen dan persyaratan yang harus dipenuhi untuk menjadi
                mahasiswa Universitas Terbuka
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <CardHeader className="bg-[#002F86] text-white p-8">
                  <CardTitle className="flex items-center space-x-4 text-2xl">
                    <motion.div
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FileText className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="font-bold">Persyaratan Umum</span>
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-lg mt-2 font-medium">
                    Dokumen dan persyaratan yang harus dipenuhi untuk mendaftar
                    sebagai mahasiswa UT
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition-all duration-300 group border border-slate-100"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-[#002F86] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                          whileHover={{
                            scale: 1.2,
                            backgroundColor: "#FFD700",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white group-hover:text-[#002F86] transition-colors duration-300" />
                        </motion.div>
                        <p className="text-slate-700 font-semibold leading-relaxed">
                          {requirement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Fee Structure Section */}
      <AnimatedSection
        className="py-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Struktur <span className="text-[#002F86]">Biaya Kuliah</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Investasi pendidikan yang terjangkau dengan kualitas terjamin
                untuk masa depan yang lebih cerah
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {feeStructure.map((fee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl bg-white h-full">
                    <CardHeader className="p-6 flex items-center space-x-4 border-b">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#002F86] text-white shadow-md transition duration-300 group-hover:scale-105">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#002F86] m-0">
                        Jenjang {fee.level}
                      </h3>
                    </CardHeader>

                    <CardContent className="p-6 space-y-5">
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <p className="text-slate-600 font-medium">
                          Biaya Registrasi
                        </p>
                        <p className="text-2xl font-bold text-[#002F86]">
                          {fee.registration}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <p className="text-slate-600 font-medium">
                          Biaya per Semester
                        </p>
                        <p className="text-2xl font-bold text-[#002F86]">
                          {fee.semester}
                        </p>
                      </div>

                      {fee.note && (
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[#FFD700]">
                          <p className="text-sm text-slate-700 font-medium">
                            {fee.note}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-yellow-50 border-2 border-[#FFD700] shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-[#FFD700] rounded-2xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Pin className="w-6 h-6 text-[#002F86]" />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-[#002F86] text-xl mb-4">
                        Catatan Penting:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Biaya dapat berubah sesuai kebijakan UT pusat",
                          "Biaya semester tergantung jumlah SKS yang diambil (minimal 12 SKS)",
                          "Tersedia program beasiswa untuk mahasiswa berprestasi",
                          "Pembayaran dapat dilakukan secara bertahap",
                        ].map((note, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-[#002F86] mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 font-semibold">
                              {note}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-[#002F86] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #002F86, #001F66)",
              "linear-gradient(45deg, #001F66, #002F86)",
              "linear-gradient(45deg, #002F86, #001F66)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Siap Memulai{" "}
            <span className="text-[#FFD700]">Pendidikan Anda?</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pilih program studi yang sesuai dengan minat Anda dan mulai
            perjalanan pendidikan tinggi bersama UT
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#FFD700] hover:bg-[#E6C200] text-[#002F86] text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold"
                asChild
              >
                <Link href="/pendaftaran">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Daftar Sekarang
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg px-10 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 font-semibold"
                asChild
              >
                <Link href="/kontak">Konsultasi Gratis</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
