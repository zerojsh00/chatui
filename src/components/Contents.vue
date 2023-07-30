<template>
  <v-app-bar class="bg-grey-darken-3" title="Cloud GPT"></v-app-bar>

  <v-main class="d-flex align-center flex-column bg-grey-lighten-3">
    <v-container fluid
      ><v-card
        class="mx-auto"
        prepend-icon="mdi-robot-excited"
        style="margin: 30px"
        v-for="num in 3"
        :key="num.id"
      >
        <v-card-text>
          SSM (Systems Manager) agent는 AWS의 Systems Manager 서비스와 상호
          작용하기 위해 EC2 인스턴스에 설치되는 에이전트입니다. SSM agent는 EC2
          인스턴스에서 실행되며, 원격 명령 실행, 자동화된 작업, 상태 모니터링 및
          관리 기능과 같은 다양한 기능을 제공합니다. <br /><br />

          SSM agent를 사용하면 다음과 같은 작업을 수행할 수 있습니다:
          <br /><br />

          1. 원격 명령 실행: SSM agent를 통해 EC2 인스턴스에 원격으로 명령을
          실행하고 출력 결과를 반환할 수 있습니다. 이를 통해 인스턴스에 로그
          수집, 패키지 설치, 구성 변경 등을 자동화할 수 있습니다. <br /><br />

          2. 자동화된 작업: SSM agent를 사용하여 EC2 인스턴스에서 자동화된
          작업을 실행할 수 있습니다. 예를 들어, 특정 시간에 인스턴스에서 백업
          작업을 실행하거나 보안 패치를 자동으로 설치하는 작업을 예약할 수
          있습니다.
          <br /><br />

          3. 상태 모니터링: SSM agent는 EC2 인스턴스의 리소스 사용량, 성능 지표
          및 로그 파일과 같은 정보를 수집하여 AWS Systems Manager 콘솔에서
          확인할 수 있도록 제공합니다. 이를 통해 인스턴스의 상태를 모니터링하고
          문제를 조기에 감지할 수 있습니다. <br /><br />

          4. 인스턴스 관리: SSM agent를 사용하여 인스턴스의 보안 설정, 네트워크
          설정, 패치 관리 등을 관리할 수 있습니다. 이를 통해 중앙 집중식으로
          인스턴스 관리를 수행할 수 있으며, 인스턴스의 상태를 안전하게 유지할 수
          있습니다.
          <br /><br />

          SSM agent는 EC2 인스턴스에 사전 설치되어 있지 않을 수 있으므로 필요한
          경우 SSM agent를 설치하고 구성해야 합니다. SSM agent는 Systems Manager
          콘솔 또는 AWS CLI를 통해 관리할 수 있습니다.
        </v-card-text>
      </v-card>
      <Prompt />
    </v-container>
  </v-main>
</template>

<script>
import Prompt from "@/components/Prompt.vue";

export default {
  name: "ContentsComponent",

  components: { Prompt },
};
</script>
