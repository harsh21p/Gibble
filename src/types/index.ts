import { number, string } from "@redux-saga/is";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

//Auth
export interface UserAuthType {
  accessToken: string;
  userId: string;
}

//Login

export interface UserLoginSuccess {
  status: number;
  message: string;
  data: {
    token: string;
    id: string;
  };
  error: boolean;
}
export interface UserLoginProps {
  payload: {
    email: string;
    password: string;
  };
}
export interface UserLoginInfo {
  userLoginPayload?: UserLoginProps;
  isUserLoginLoading: boolean;
  userLoginResponse?: UserLoginSuccess;
  userLoginError?: UserLoginError;
}
export interface UserLoginError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

//Signup

export interface SignUpUserProps {}
export interface UserSignupSuccess {
  status: number;
  message: string;
  data: {
    id: string;
    email: string;
    phone: string;
  };
  error: boolean;
}
export interface UserSignupProps {
  payload: {
    email: string;
    phone: string;
    password: string;
    labName: string;
    ownerName: string;
    labNo: string;
    address: string;
  };
  isDoctor: boolean;
}
export interface UserSignupInfo {
  userSignupPayload?: UserSignupProps;
  isUserSignupLoading: boolean;
  userSignupResponse?: UserSignupSuccess;
  userSignupError?: UserSignupError;
}
export interface UserSignupError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

//Ping

export interface GetPingProps {}

export interface GetPingSuccess {
  status: number;
  message: string;
  data: string;
  error: boolean;
}
export interface GetPingInfo {
  getPingPayload?: GetPingProps;
  isGetPingLoading: boolean;
  getPingResponse?: GetPingSuccess;
  getPingError?: GetPingError;
}
export interface GetPingError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// Data Type
export type Entry = {
  id: string;
  unit: string;
  patient: string;
  lab: {
    id: string;
    labName: string;
    email: string;
    images: any | null;
    phone: string;
    address: string;
    ownerName: string;
    labNo: string;
    created: string | null;
    deleted: string | null;
  };
  labMaterial: {
    id: string;
    material: {
      id: string;
      name: string;
      created: string | null;
      deleted: string | null;
    };
    price: number;
    created: string | null;
    deleted: string | null;
  };
  amount: number;
  entryDate: string;
  graph: string[];
  doctor: {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    created: string | null;
    deleted: string | null;
    address:string;
  };
  created: string | null;
  deleted: string | null;
  invoice: any | null;
};

// Entry List

export interface GetEnriesSuccess {
  status: number;
  message: string;
  data: {
    content: Entry[];
    isLastPage: boolean;
    page: number;
    size: number;
  };
  error: boolean;
}
export interface GetEnriesProps {
  payload: {
    page: number;
    size: number;
    labId: string;
  };
}

export interface GetEnriesInfo {
  getEnriesPayload?: GetEnriesProps;
  isGetEnriesLoading: boolean;
  getEnriesResponse?: GetEnriesSuccess;
  getEnriesError?: GetEnriesError;
}
export interface GetEnriesError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// add entry

export interface AddEntrySuccess {
  status: number;
  message: string;
  data: {
    id: string;
  };
  error: boolean;
}
export interface AddEntryProps {
  payload: {
    doctorId: string;
    labId: string;
    entryDate: Date;
    materialId: string;
    amount: Double;
    graph: number[];
    unit: string;
    patient:string;
  };
}
export interface AddEntryInfo {
  addEntryPayload?: AddEntryProps;
  isAddEntryLoading: boolean;
  addEntryResponse?: AddEntrySuccess;
  addEntryError?: AddEntryError;
}
export interface AddEntryError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// add material

export interface AddMaterialSuccess {
  status: number;
  message: string;
  data: {
    id: string;
  };
  error: boolean;
}
export interface AddMaterialProps {
  payload: {
    labId: string;
    materialId: string;
    price: string;
  };
}
export interface AddMaterialInfo {
  addMaterialPayload?: AddMaterialProps;
  isAddMaterialLoading: boolean;
  addMaterialResponse?: AddMaterialSuccess;
  addMaterialError?: AddMaterialError;
}
export interface AddMaterialError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// add doctor

export interface AddDoctorSuccess {
  status: number;
  message: string;
  data: {
    id: string;
  };
  error: boolean;
}
export interface AddDoctorProps {
  payload: {
    labId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address:string;
  };
}
export interface AddDoctorInfo {
  addDoctorPayload?: AddDoctorProps;
  isAddDoctorLoading: boolean;
  addDoctorResponse?: AddDoctorSuccess;
  addDoctorError?: AddDoctorError;
}
export interface AddDoctorError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// get material

type Material = {
  id: any;
  material: {
    id: string;
    name: string;
  };
  price: Double;
};

export interface GetMaterialSuccess {
  status: number;
  message: string;
  data: {
    content: Material[];
    last: boolean;
    pageNumber: number;
    totalPages: number;
  };
  error: boolean;
}
export interface GetMaterialProps {
  payload: {
    labId: string;
    page: number;
    size: number;
  };
}
export interface GetMaterialInfo {
  getMaterialPayload?: GetMaterialProps;
  isGetMaterialLoading: boolean;
  getMaterialResponse?: GetMaterialSuccess;
  getMaterialError?: GetMaterialError;
  data?: Material[];
  currentPage?: number;
  totalPage?: number;
  last: boolean;
}
export interface GetMaterialError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

export interface GetListSuccess {
  status: number;
  message: string;
  data: {
    content: Entry[];
    last: boolean;
    pageNumber: number;
    totalPages: number;
  };
  error: boolean;
}

export interface GetListProps {
  payload: {
    page: number;
    size: number;
    labId: string;
    startDate?: string | null;
    endDate?: string | null;
    doctorId: string[] | null;
  };
  selected: string;
}
export interface GetListInfo {
  getListPayload?: GetListProps;
  isGetListLoading: boolean;
  getListResponse?: GetListSuccess;
  data?: Entry[];
  currentPage?: number;
  totalPage?: number;
  getListError?: GetListError;
}
export interface GetListError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// get doctors

type Doctor = {
  id: string;
};

export interface GetDoctorsSuccess {
  status: number;
  message: string;
  data: {
    content: Doctor[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
  };
  error: boolean;
}
export interface GetDoctorsProps {
  payload: {
    page: number;
    size: number;
    labId: string;
  };
}
export interface GetDoctorsInfo {
  getDoctorsPayload?: GetDoctorsProps;
  isGetDoctorsLoading: boolean;
  getDoctorsResponse?: GetDoctorsSuccess;
  getDoctorsError?: GetDoctorsError;
  data?: Doctor[];
  last: boolean;
  currentPage?: number;
  totalPage?: number;
}
export interface GetDoctorsError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

export interface AddTransactionSuccess {
  status: number;
  message: string;
  data: {
    id: string;
  };
  error: boolean;
}
export interface AddTransactionProps {
  payload: {
    doctorId: string;
    amount: string;
    labId: string;
    date: Date;
    reason: string;
  };
}
export interface AddTransactionInfo {
  addTransactionPayload?: AddTransactionProps;
  isAddTransactionLoading: boolean;
  addTransactionResponse?: AddTransactionSuccess;
  addTransactionError?: AddTransactionError;
}
export interface AddTransactionError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

type Transaction = {
  id: string;
};
export interface GetTransactionSuccess {
  status: number;
  message: string;
  data: {
    content: Transaction[];
    last: boolean;
    pageNumber: number;
    totalPages: number;
  };
  error: boolean;
}
export interface GetTransactionProps {
  payload: {
    page: number;
    size: number;
    labId: string;
  };
}
export interface GetTransactionInfo {
  getTransactionPayload?: GetTransactionProps;
  isGetTransactionLoading: boolean;
  getTransactionResponse?: GetTransactionSuccess;
  getTransactionError?: GetTransactionError;
  data?: Transaction[];
  currentPage?: number;
  totalPage?: number;
}
export interface GetTransactionError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

export interface AddMaterialBasicSuccess {
  status: number;
  message: string;
  data: { id: string };
  error: boolean;
}
export interface AddMaterialBasicProps {
  payload: {
    name: string;
  };
}

type MaterialBasic = {
  id: string;
};
export interface AddMaterialBasicInfo {
  addMaterialBasicPayload?: AddMaterialBasicProps;
  isAddMaterialBasicLoading: boolean;
  addMaterialBasicResponse?: AddMaterialBasicSuccess;
  addMaterialBasicError?: AddMaterialBasicError;
}
export interface AddMaterialBasicError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

export interface GetMaterialBasicSuccess {
  status: number;
  message: string;
  data: {
    content: MaterialBasic[];
    last: boolean;
    pageNumber: number;
    totalPages: number;
  };
  error: boolean;
}
export interface GetMaterialBasicProps {
  payload: {
    name: string;
    page: number;
    size: number;
  };
}
export interface GetMaterialBasicInfo {
  getMaterialBasicPayload?: GetMaterialBasicProps;
  isGetMaterialBasicLoading: boolean;
  getMaterialBasicResponse?: GetMaterialBasicSuccess;
  getMaterialBasicError?: GetMaterialBasicError;
  data?: MaterialBasic[];
  currentPage?: number;
  totalPage?: number;
}
export interface GetMaterialBasicError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// add doctor to lab

export interface AddDoctorToLabSuccess {
  status: number;
  message: string;
  data: {
    labId: string;
    doctorId: string;
  };
  error: boolean;
}
export interface AddDoctorToLabProps {
  payload: {
    labId: string;
    doctorId: string;
  };
}
export interface AddDoctorToLabInfo {
  addDoctorToLabPayload?: AddDoctorToLabProps;
  isAddDoctorToLabLoading: boolean;
  addDoctorToLabResponse?: AddDoctorToLabSuccess;
  addDoctorToLabError?: AddDoctorToLabError;
}
export interface AddDoctorToLabError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// delete entry

export interface DeleteEntrySuccess {
  status: number;
  message: string;
  data: string;
  error: boolean;
}
export interface DeleteEntryProps {
  payload: {
    id: string;
  };
}
export interface DeleteEntryInfo {
  deleteEntryPayload?: DeleteEntryProps;
  isDeleteEntryLoading: boolean;
  deleteEntryResponse?: DeleteEntrySuccess;
  deleteEntryError?: DeleteEntryError;
}
export interface DeleteEntryError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// get doctor by id
export interface GetDoctorByIdSuccess {
  status: number;
  message: string;
  data: Double;
  error: boolean;
}
export interface GetDoctorByIdProps {
  payload: {
    labId: string;
    doctorIdOne: string;
  };
}
export interface GetDoctorByIdInfo {
  getDoctorByIdPayload?: GetDoctorByIdProps;
  isGetDoctorByIdLoading: boolean;
  getDoctorByIdResponse?: GetDoctorByIdSuccess;
  getDoctorByIdError?: GetDoctorByIdError;
}
export interface GetDoctorByIdError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

export interface GetApiSuccess {}
export interface GetApiProps {}
export interface GetApiInfo {
  getApiPayload?: GetApiProps;
  isGetApiLoading: boolean;
  getApiResponse?: GetApiSuccess;
  getApiError?: GetApiError;
}
export interface GetApiError {}

// Images

export interface AddImagesSuccess {
  status: number;
  message: string;
  data: string;
  error: boolean;
}
export interface AddImagesProps {
  payload: {
    labId: string;
    signatureImage: any;
    logoImage: any;
  };
}
export interface AddImagesInfo {
  addImagesPayload?: AddImagesProps;
  isAddImagesLoading: boolean;
  addImagesResponse?: AddImagesSuccess;
  addImagesError?: AddImagesError;
}
export interface AddImagesError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// images

export interface GetImagesSuccess {
  status: number;
  message: string;
  data: {
    logoImage: string;
    signatureImage: string;
  };
  error: boolean;
}
export interface GetImagesProps {
  payload: {
    id: string;
  };
}
export interface GetImagesInfo {
  getImagesPayload?: GetImagesProps;
  isGetImagesLoading: boolean;
  getImagesResponse?: GetImagesSuccess;
  getImagesError?: GetImagesError;
}
export interface GetImagesError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}

// update

export interface UpdateImagesSuccess {
  status: number;
  message: string;
  data: string;
  error: boolean;
}
export interface UpdateImagesProps {
  payload: {
    labId: string;
    signatureImage: any;
    logoImage: any;
  };
}
export interface UpdateImagesInfo {
  updateImagesPayload?: UpdateImagesProps;
  isUpdateImagesLoading: boolean;
  updateImagesResponse?: UpdateImagesSuccess;
  updateImagesError?: UpdateImagesError;
}
export interface UpdateImagesError {
  status: number;
  message: string;
  data: string;
  error: boolean;
}
