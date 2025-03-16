type Location = {
  id: number;
  name: string;
};

type JobType = {
  employment: 'full-time' | 'assist' | 'substitute';
  institution: 'kindergarten' | 'daycare';
};

type Career = 'inexperienced' | 'experienced';

interface JobDescription {
  name: string; // 기관명
  endAt: string; // 모집 마감 날짜
  workingDate: {
    start: string; // HH:mm
    end?: string; // HH:mm
  };
  location: Location;
  address: string;
  type: JobType;
  phone: string; // (2|3)-(3-4)-4
  email: string;
  career: Career; // 경력 => 라디오로 제공하기(신입, 경력)
  salary: string; // 급여 => 라디오로 제공하기(협의, 금액 인풋)
  description: string; // 설명
}

export interface Post extends JobDescription {
  id: number;
  title: string;
}
